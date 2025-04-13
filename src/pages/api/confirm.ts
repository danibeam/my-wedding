import { confirmAttendance } from "../../lib/confirm-attendance";

export const prerender = false;

export async function POST({ request }: { request: Request }) {
    try {
        const { guestToken } = await request.json();
        console.log(guestToken);
        await confirmAttendance(guestToken);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        return new Response(
            JSON.stringify({ error: "Failed to confirm attendance" }),
            { status: 500 }
        );
    }
}
