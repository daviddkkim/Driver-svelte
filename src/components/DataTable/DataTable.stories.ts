import type { StoryObj } from '@storybook/svelte';

import DataTable from './DataTable.svelte';
import { renderComponent, type ColumnDef } from '@tanstack/svelte-table';
import TableHeaderCell from '../Table/TableHeaderCell.svelte';
import TableBodyCell from '../Table/TableBodyCell.svelte';
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
        header: (info) => renderComponent(TableHeaderCell, {label: 'First Name', onDeleteClick: () => console.log(info.column.id)}),
        cell: (info) => renderComponent(TableBodyCell, {label: info.getValue() as string}),
        accessorKey: 'firstName'
    },
    {
        header: (info) => renderComponent(TableHeaderCell, {label: 'Last Name', onDeleteClick: () => console.log(info.column.id)}),
        accessorKey: 'lastName',
        cell: (info) => renderComponent(TableBodyCell, {label: info.getValue() as string}),

    },
    {
        accessorKey: 'age',
        header: (info) => renderComponent(TableHeaderCell, {label: 'Age', onDeleteClick: () => console.log(info.column.id)}),
        footer: (props) => props.column.id,
        cell: (info) => renderComponent(TableBodyCell, {label: info.getValue() as string}),

    },
    {

        accessorKey: 'visits',
        header: (info) => renderComponent(TableHeaderCell, {label: 'Visits', onDeleteClick: () => console.log(info.column.id)}),
        cell: (info) => renderComponent(TableBodyCell, {label: info.getValue() as string}),

    },
    {
        accessorKey: 'status',
        header: (info) => renderComponent(TableHeaderCell, {label: 'Status', onDeleteClick: () => console.log(info.column.id)}),
        cell: (info) => renderComponent(TableBodyCell, {label: info.getValue() as string}),

    },
    {
        accessorKey: 'progress',
        header: (info) => renderComponent(TableHeaderCell, {label: 'Progress', onDeleteClick: () => console.log(info.column.id)}),
        cell: (info) => renderComponent(TableBodyCell, {label: info.getValue() as string}),

    }
];

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Default: Story = {
    args: {
        columns: defaultColumns,
        data: defaultData,
    },
};


