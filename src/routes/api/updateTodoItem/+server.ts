import { error } from '@sveltejs/kit';
import { client } from '../../../$lib/server/db/postgres';

export async function POST({ request }: { request: Request }) {

    const response = await request.json();
    try {
        await client.query(`UPDATE driver SET content='${response.content}', todo=${response.todo} WHERE id=${response.id}`);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    catch (e) {
        let message
        if (e instanceof Error) message = e.message
        else message = String(e)
        throw error(400, message);
    }
}