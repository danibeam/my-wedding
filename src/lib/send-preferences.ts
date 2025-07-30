import { turso } from "./turso";

export async function sendPreferences(
    guestId: number,
    allergies: string,
    mealPreference: string,
    notes: string,
    participate?: boolean
): Promise<void> {
    try {
        await turso.execute({
            sql: `INSERT INTO GuestExtraInfo (guest_id, allergies, meal_preference, notes, participate) VALUES (?, ?, ?, ?, ?)`,
            args: [
                guestId,
                allergies,
                mealPreference,
                notes,
                participate ?? false,
            ],
        });
    } catch (error) {
        console.error("Error sending preferences:", error);
        throw error;
    }
}
