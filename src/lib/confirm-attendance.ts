import { turso } from "./turso";

export async function confirmAttendance(token: string): Promise<void> {
    try {
        const response = await turso.execute({
            sql: `UPDATE guests SET attendance = 1 WHERE token = ?`,
            args: [token],
        });
        if (response.rowsAffected === 0) {
            throw new Error("No rows updated. Guest may not exist.");
        }
    } catch (error) {
        console.error("Error confirming attendance:", error);
        throw error;
    }
}
