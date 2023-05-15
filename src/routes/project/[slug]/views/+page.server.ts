import { client } from "../../../../$lib/server/db/postgres";

export async function load() {

    const { rows: dataRows } = await client.query('SELECT * from driver ORDER BY id');
    const { rows: columns } = await client.query(`SELECT column_name, data_type, character_maximum_length
        FROM information_schema.columns
        WHERE table_name = 'driver';`)




    // Type assertion for the rows

    return {
        data: dataRows,
        columns: columns
    };
}