import { client } from "../../../../$lib/server/db/postgres";

export async function load() {


    const { rows: dataRows } = await client.query('SELECT * from driver');
    const { rows: columns } = await client.query(`SELECT column_name, data_type, character_maximum_length
    FROM information_schema.columns
    WHERE table_name = 'driver';`)

    return {
        data: dataRows,
        columns: columns
    };
}

export const actions = {
    addColumn: async ({ request }) => {
        console.log('here')
        const data = await request.formData();
        console.log(data.get('column_name'))
        console.log(data.get('column_type'))
        try {
            const { rows: dataRows } = await client.query(`ALTER TABLE driver ADD COLUMN ${data.get('column_name')} ${data.get('column_type')}`);
            console.log(dataRows)
            return {
                dataRows
            }
        }
        catch (e) {
            console.log(e)
        }
        // TODO log the user in
    }
};