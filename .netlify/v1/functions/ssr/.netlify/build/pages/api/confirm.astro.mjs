import { t as turso } from '../../chunks/turso_D8hug2xw.mjs';
export { renderers } from '../../renderers.mjs';

async function confirmAttendance(token) {
  try {
    const response = await turso.execute({
      sql: `UPDATE guests SET attendance = 1 WHERE token = ?`,
      args: [token]
    });
    if (response.rowsAffected === 0) {
      throw new Error("No rows updated. Guest may not exist.");
    }
  } catch (error) {
    console.error("Error confirming attendance:", error);
    throw error;
  }
}

const prerender = false;
async function POST({ request }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
