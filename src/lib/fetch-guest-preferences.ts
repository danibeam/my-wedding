import type { GuestExtraInfo } from "../types/types";
import { turso } from "./turso";

export async function getGuestPreferences(
    guestId: string
): Promise<GuestExtraInfo | null> {
    if (!guestId) {
        throw new Error("GuestId is required to fetch guest.");
    }
    try {
        const response = await turso.execute({
            sql: `SELECT * FROM guestextrainfo WHERE guest_id = ?`,
            args: [guestId],
        });
        const guestExtraInfo =
            (response.rows[0] as unknown as GuestExtraInfo) || null;
        return guestExtraInfo;
    } catch (error) {
        console.error("Error fetching guest:", error);
        return null;
    }
}
