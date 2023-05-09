//import { client } from "../$lib/server/db/postgres";
import { fail, redirect } from '@sveltejs/kit';

const database = {
    projects: [
        {
            id: '1',
            name: 'Something',
            created_at: new Date()
        },
        {
            id: '2',
            name: 'Test',
            created_at: new Date()
        },
    ]
}
export async function load(event) {
    const session = await event.locals.getSession();
    if (!session?.user) throw redirect(303, "/auth");

    return database;
}

export const actions = {
    createProject: async ({ request }) => {
        const data = await request.formData();
        const project_name = data.get('project_name');

        if (!project_name) {
            return fail(400, { error: 'Project name cannot be empty' });
        }
        database.projects.push({
            id: String(database.projects.length + 1),
            name: project_name ? String(project_name) : 'newProject',
            created_at: new Date()
        })
    }
};