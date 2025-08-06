import { sendPreferences } from "../../lib/send-preferences";

export const prerender = false;

export async function POST({ request }: { request: Request }) {
    try {
        const { guestId, allergies, diet, mainDish, notes, participate } =
            await request.json();
        await sendPreferences(
            guestId,
            allergies,
            diet,
            mainDish,
            notes,
            participate
        );

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
        });
    } catch (err) {
        console.error("Error en el backend:", err);
        return new Response(
            JSON.stringify({ error: "Failed to send preferences: ", err }),
            {
                status: 500,
            }
        );
    }
}
