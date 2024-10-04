import React from 'react'

import { ColumnProps, Table, TableProps } from '../../src'

import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<TableProps<any>> = {
    title: 'Components/Table',
    component: Table
}

export default meta

interface ExampleData {
    id: number
    name: string
    age: number
    city: string
}

const columns: ColumnProps<ExampleData>[] = [
    {
        header: 'ID',
        accessor: 'id',
        isSortable: true,
        className: 'id-column'
    },
    {
        header: 'Name',
        accessor: 'name',
        className: 'name-column'
    },
    {
        header: 'Age',
        accessor: 'age',
        isSortable: true,
        formatter: (value) => <strong>{value} years</strong>
    },
    {
        header: 'City',
        accessor: 'city'
    }
]

const data: ExampleData[] = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'San Francisco' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Los Angeles' },
    { id: 4, name: 'Emily Davis', age: 23, city: 'Chicago' }
]

const Template: StoryFn<TableProps<ExampleData>> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
    data: data,
    columns: columns,
    className: 'custom-table',
    loading: false,
    stickyHeader: true,
    verticalBorder: true,
    defaultSort: { key: 'id', direction: 'asc' }
}
