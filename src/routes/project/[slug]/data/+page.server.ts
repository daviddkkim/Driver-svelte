import { client } from "../../../../$lib/server/db/postgres";
import { fail } from '@sveltejs/kit';
import type { ColumnTypes } from "../../../../lib/types";

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
        const data = await request.formData();
        //validation
        const column_name = data.get('column_name') as string | undefined;
        const column_type = data.get('column_type') as ColumnTypes | undefined;
        const column_default = data.get('column_default') as string | undefined;

        //TO-DO: theres way more types to be parsed out.
        const parsed_column_type = column_type === 'number' ? "int4" : column_type;
        if (!column_name) {
            return fail(400, { error: 'column name cannot be empty' });
        }
        if (column_name.length < 1) {
            return fail(400, { error: 'column name cannot be empty' });
        }
        if (column_name.length > 64) {
            return fail(400, { error: 'column name cannot be longer than 64 characters' });
        }
        if (column_name.match(/[^a-zA-Z0-9_]/)) {
            return fail(400, { error: 'column name can only contain letters, numbers and underscores' });
        }
        if (column_name.match(/\s/)) {
            return fail(400, { error: 'column name cannot contain spaces' });
        }

        if (!column_type) {
            throw fail(400, { error: 'column type cannot be empty' });
        }
        //TODO more strict validations here.

        try {
            const query = `ALTER TABLE driver ADD COLUMN ${column_name} ${parsed_column_type} ${column_default ? `DEFAULT ` + column_default : ''}`;
            const { rows: dataRows } = await client.query(query);
            return {
                dataRows
            }
        }
        catch (error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)

            return fail(400, {
                error: message
            });
        }
    },
    deleteColumn: async ({ request }) => {
        const data = await request.formData();
        const column_name = data.get('column_name') as string | undefined;

        if (!column_name) {
            return fail(400, { error: 'column name cannot be empty' });
        }
        try {
            const { rows: dataRows } = await client.query(`ALTER TABLE driver DROP COLUMN ${column_name}`);
            return {
                dataRows
            }
        }
        catch (error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)

            return fail(400, {
                error: message
            });
        }
    },
    //TODO: doesn't really work
    editColumn: async ({ request }) => {
        const data = await request.formData();
       // const column_name = data.get('column_name') as string | undefined;
        const column_type = data.get('column_type') as ColumnTypes | undefined;
        //const column_default = data.get('column_default') as string | undefined;
        const old_column_name = data.get('selectedCol') as string | undefined;
        //TO-DO: theres way more types to be parsed out.
        const parsed_column_type = column_type === 'number' ? "int4" : column_type;
        try {
            const { rows: dataRows } = await client.query(`
            ALTER TABLE driver ALTER COLUMN ${old_column_name} SET DATA TYPE ${parsed_column_type};
            `);
            return {
                dataRows
            }
        }
        catch (error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)

            return fail(400, {
                error: message
            });
        }
    },
    addRow: async () => {
        try {

            const { rows: dataRows } = await client.query(`INSERT INTO driver DEFAULT VALUES`);
            return {
                dataRows
            }
        } catch (error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)

            return fail(400, {
                error: message
            });
        }
    },
    deleteRows: async ({ request }) => {

        const data = await request.formData();
        const rows = data.get('rows') as string | undefined;
        if (!rows) {
            return fail(400, { error: 'column name cannot be empty' });
        }

        try {
            const deleteRowIds = JSON.parse(rows).map((row: string[]) => row[0]).join(',');
            await client.query(`DELETE FROM driver WHERE id IN (${deleteRowIds})`);

        } catch (error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)

            return fail(400, {
                error: message
            });
        }
    }
};