import { Client } from "pg";
import { env } from '$env/dynamic/private';


const connectionString = env.SUPABASE_CONNECTION;
if (!connectionString) {
    throw new Error("Missing SUPABASE_CONNECTION environment variable");
}

export const client = new Client({
    connectionString
})

await client.connect()
