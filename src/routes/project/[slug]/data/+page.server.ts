import { client } from "../../../../$lib/server/db/postgres";

export async function load() {


    const { rows: dataRows } = await client.query('SELECT * from driver');
    const { rows: columns } = await client.query(`SELECT column_name, data_type, character_maximum_length
    FROM information_schema.columns
    WHERE table_name = 'driver';`)
    console.log(dataRows)
    console.log(columns)
    return {
        data: dataRows,
        columns: columns
    };
}

export const actions = {
    addColumn: async ({ request }) => {
        const data = await request.formData();
      /*   console.log(data)
        const { rows: dataRows } = await client.query(`ALTER TABLE driver ADD COLUMN ${data.get('column_name')} ${data.get('data_type')}(${data.get('character_maximum_length')})`); */
        return {
            data
        }
        // TODO log the user in
    }
};