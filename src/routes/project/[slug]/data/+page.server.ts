import { client } from "../../../../$lib/server/db/postgres";

export async function load() {


    const res = await client.query('SELECT NOW()');

    console.log(res)
    return {
        data: res.rows
    };
}