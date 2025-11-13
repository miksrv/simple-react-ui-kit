import { Meta, StoryFn } from '@storybook/react'

import { ColumnProps, Table, TableProps } from '../../src'

const meta: Meta<TableProps<string>> = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        docs: {
            description: {
                component: `
\`\`\`typescript
/**
 * Column properties for table component
 */
export interface ColumnProps<T> {
    /** Header content for the column */
    header: string | React.ReactNode
    /** Accessor key to map data for the column */
    accessor: keyof T
    /** Additional class names for custom styling */
    className?: string
    /** Whether the column is sortable */
    isSortable?: boolean
    /** Whether the column is hidden */
    hidden?: boolean
    /** Function to set background color based on the cell's value */
    background?: (value: T[keyof T], row: T) => string | undefined
    /** Formatter function to format the cell value */
    formatter?: (value: T[keyof T], row: T[], index: number) => React.ReactNode
}
\`\`\``
            }
        }
    }
}

export default meta

interface ExampleData {
    id: number
    name: string
    age: number
    city: string
}

const columns: Array<ColumnProps<ExampleData>> = [
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
    size: 'medium',
    stickyHeader: true,
    verticalBorder: true,
    defaultSort: { key: 'id', direction: 'asc' }
}
