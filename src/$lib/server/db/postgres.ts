import { Client } from "pg";
import { SUPABASE_CONNECTION } from "$env/static/private";


const connectionString = SUPABASE_CONNECTION;
if (!connectionString) {
    throw new Error("Missing SUPABASE_CONNECTION environment variable");
}

export const client = new Client({
    connectionString
})

await client.connect()
