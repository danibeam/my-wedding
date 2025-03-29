import type { Guest } from "../types/types";
import { turso } from "./turso";

export async function getGuestByToken(
    token: string | undefined
): Promise<Guest | null> {
    if (!token) {
        throw new Error("Token is required to fetch guest.");
    }
    try {
        const response = await turso.execute({
            sql: `SELECT * FROM guests WHERE token = ?`,
            args: [token],
        });
        return response.rows.length > 0
            ? (response.rows[0] as unknown as Guest)
            : null;
    } catch (error) {
        console.error("Error fetching guest:", error);
        return null;
    }
}
