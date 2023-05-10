import { error, json } from '@sveltejs/kit';
//import { client } from '../../../$lib/server/db/postgres';

export async function POST({ request }: { request: Request }) {

    const { row } = await request.json();
    //const { rows: dataRows } = await client.query('SELECT * from driver');

    return json(row)

    return json('success')
}