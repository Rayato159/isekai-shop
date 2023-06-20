import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export async function POST({ request }: any) {
    const { a, b } = await request.json();
    return json(a + b);
}
