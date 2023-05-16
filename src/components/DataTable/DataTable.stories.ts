import type { StoryObj } from '@storybook/svelte';

import DataTable from './DataTable.svelte';
import type { ColumnDef } from '@tanstack/svelte-table';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
    title: 'Example/DataTable',
    component: DataTable,
    tags: ['autodocs'],
    argTypes: {

    },
}

export default meta;
type Story = StoryObj<typeof meta>;

type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
  const defaultData: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]


	const defaultColumns: ColumnDef<Person>[] = [
		{
			header: 'Name',
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: 'firstName',
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id
				},
				{
					accessorFn: (row) => row.lastName,
					id: 'lastName',
					cell: (info) => info.getValue(),
					header: () => 'Last Name',
					footer: (props) => props.column.id
				}
			]
		},
		{
			header: 'Info',
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: 'age',
					header: () => 'Age',
					footer: (props) => props.column.id
				},
				{
					header: 'More Info',
					columns: [
						{
							accessorKey: 'visits',
							header: () => 'Visits',
							footer: (props) => props.column.id
						},
						{
							accessorKey: 'status',
							header: 'Status',
							footer: (props) => props.column.id
						},
						{
							accessorKey: 'progress',
							header: 'Profile Progress',
							footer: (props) => props.column.id
						}
					]
				}
			]
		}
	];

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Default: Story = {
    args: {
        columns: defaultColumns,
        data: defaultData,
    },
};


