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
        const guest = (response.rows[0] as unknown as Guest) || null;
        const { name, ...rest } = guest;
        const formattedName =
            name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return {
            name: formattedName,
            ...rest,
        };
    } catch (error) {
        console.error("Error fetching guest:", error);
        return null;
    }
}

export async function getAllGuestTokens(): Promise<string[]> {
    try {
        const response = await turso.execute({
            sql: `SELECT token FROM guests`,
        });
        return response.rows.map(
            (row) => (row as unknown as { token: string }).token
        );
    } catch (error) {
        console.error("Error fetching guest tokens:", error);
        return [];
    }
}
