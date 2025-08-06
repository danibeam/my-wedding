import { turso } from "./turso";

export async function sendPreferences(
    guestId: number,
    allergies: string,
    mealPreference: string,
    mainDish: string,
    notes: string,
    participate?: boolean
): Promise<void> {
    try {
        await turso.execute({
            sql: `INSERT INTO GuestExtraInfo (guest_id, allergies, meal_preference, main_dish, notes, participate) VALUES (?, ?, ?, ?, ?, ?)`,
            args: [
                guestId,
                allergies,
                mealPreference,
                mainDish,
                notes,
                participate ?? false,
            ],
        });
    } catch (error) {
        console.error("Error sending preferences:", error);
        throw error;
    }
}
