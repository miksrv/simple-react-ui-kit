import React, { useState } from 'react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { type ColumnProps, Table, type TableProps } from '../../src'
import { SortConfig } from '../../src/components/table/types'

type Row = {
    id: number
    name: string
    status: 'active' | 'inactive' | 'pending'
    role: string
    score: number
}

const sampleData: Row[] = [
    { id: 1, name: 'Alice Johnson', status: 'active', role: 'Admin', score: 92 },
    { id: 2, name: 'Bob Smith', status: 'inactive', role: 'Editor', score: 54 },
    { id: 3, name: 'Carol White', status: 'pending', role: 'Viewer', score: 71 },
    { id: 4, name: 'David Lee', status: 'active', role: 'Editor', score: 88 },
    { id: 5, name: 'Eva Brown', status: 'active', role: 'Admin', score: 95 },
    { id: 6, name: 'Frank Miller', status: 'inactive', role: 'Viewer', score: 33 }
]

const baseColumns: Array<ColumnProps<Row>> = [
    { header: 'ID', accessor: 'id', isSortable: true },
    { header: 'Name', accessor: 'name', isSortable: true },
    { header: 'Role', accessor: 'role' },
    { header: 'Status', accessor: 'status' },
    { header: 'Score', accessor: 'score', isSortable: true }
]

const meta: Meta<TableProps<Row>> = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A generic typed data table (`Table<T>`) that supports client-side sorting, loading skeletons, sticky header, vertical borders, custom cell formatters, and background colour functions. Define columns with the `ColumnProps<T>` interface and pass `data` as an array of `T`.'
            }
        }
    },
    argTypes: {
        data: { control: false, description: 'Array of row data objects' },
        columns: { control: false, description: 'Column configuration array (`ColumnProps<T>[]`)' },
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large'],
            description: 'Row height / font size',
            table: { defaultValue: { summary: 'medium' } }
        },
        loading: {
            control: 'boolean',
            description: 'Shows animated skeleton rows instead of actual data',
            table: { defaultValue: { summary: 'false' } }
        },
        stickyHeader: {
            control: 'boolean',
            description: 'Keeps the `<thead>` fixed while the body scrolls (requires `height` or `maxHeight`)',
            table: { defaultValue: { summary: 'false' } }
        },
        verticalBorder: {
            control: 'boolean',
            description: 'Draws vertical dividers between columns',
            table: { defaultValue: { summary: 'false' } }
        },
        noDataCaption: {
            control: 'text',
            description: 'Message shown when `data` is empty',
            table: { defaultValue: { summary: 'No data' } }
        },
        height: {
            control: 'number',
            description: 'Fixed pixel height for the table container'
        },
        maxHeight: {
            control: 'number',
            description: 'Maximum pixel height — container shrinks if data is short'
        },
        defaultSort: {
            control: false,
            description: 'Initial sort configuration `{ key: keyof T, direction: "asc" | "desc" }`'
        },
        sort: {
            control: false,
            description:
                'Controlled sort state for external (server-side) sorting. Pass together with `column.onChangeSort` to display the active sort indicator.'
        },
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        data: sampleData,
        columns: baseColumns,
        size: 'medium'
    },
    parameters: {
        docs: {
            description: {
                story: 'Basic table with sortable columns. Click any sortable header to toggle ascending/descending order.'
            }
        }
    }
}

export const WithSorting: Story = {
    name: 'With Default Sort',
    args: {
        data: sampleData,
        columns: baseColumns,
        defaultSort: { key: 'score', direction: 'desc' }
    },
    parameters: {
        docs: {
            description: {
                story: 'Pre-sorted by `score` descending via `defaultSort`. Click sortable headers to change the sort.'
            }
        }
    }
}

export const LoadingState: Story = {
    name: 'Loading State',
    args: {
        data: sampleData,
        columns: baseColumns,
        loading: true
    },
    parameters: {
        docs: {
            description: {
                story: 'When `loading` is `true` the table body displays animated skeleton rows — useful while fetching data from an API.'
            }
        }
    }
}

export const EmptyState: Story = {
    name: 'Empty State',
    args: {
        data: [],
        columns: baseColumns,
        noDataCaption: 'No users found. Try adjusting your filters.'
    },
    parameters: {
        docs: {
            description: {
                story: 'When `data` is an empty array a single full-width row displays the `noDataCaption` message.'
            }
        }
    }
}

export const EmptyStateDefaultCaption: Story = {
    name: 'Empty State — Default Caption',
    args: {
        data: [],
        columns: baseColumns
    },
    parameters: {
        docs: {
            description: {
                story: 'When `data` is an empty array and `noDataCaption` is not provided the table falls back to the built-in `"No data"` caption.'
            }
        }
    }
}

export const StickyHeader: Story = {
    name: 'Sticky Header',
    args: {
        data: sampleData,
        columns: baseColumns,
        stickyHeader: true,
        height: 200
    },
    parameters: {
        docs: {
            description: {
                story: 'With `stickyHeader` and a fixed `height` the table header remains visible while the body scrolls.'
            }
        }
    }
}

export const WithVerticalBorder: Story = {
    name: 'With Vertical Border',
    args: {
        data: sampleData,
        columns: baseColumns,
        verticalBorder: true
    },
    parameters: {
        docs: {
            description: {
                story: '`verticalBorder` draws dividers between every column for a more grid-like appearance.'
            }
        }
    }
}

export const WithFormatter: Story = {
    name: 'With Cell Formatter',
    args: {
        data: sampleData,
        columns: [
            { header: 'ID', accessor: 'id', isSortable: true },
            { header: 'Name', accessor: 'name', isSortable: true },
            { header: 'Role', accessor: 'role' },
            {
                header: 'Status',
                accessor: 'status',
                formatter: (value) => {
                    const colorMap: Record<string, string> = {
                        active: '#22c55e',
                        inactive: '#6b7280',
                        pending: '#f59e0b'
                    }
                    return (
                        <span
                            style={{
                                display: 'inline-block',
                                padding: '2px 8px',
                                borderRadius: 12,
                                fontSize: 12,
                                fontWeight: 600,
                                background: colorMap[value as string] + '22',
                                color: colorMap[value as string]
                            }}
                        >
                            {String(value)}
                        </span>
                    )
                }
            },
            {
                header: 'Score',
                accessor: 'score',
                isSortable: true,
                formatter: (value) => <strong>{String(value)}</strong>
            }
        ] as Array<ColumnProps<Row>>
    },
    parameters: {
        docs: {
            description: {
                story: 'Column `formatter` functions receive the cell value, the full sorted dataset, and the row index. Here `status` renders a coloured badge and `score` renders bold text.'
            }
        }
    }
}

export const WithBackground: Story = {
    name: 'With Cell Background',
    args: {
        data: sampleData,
        columns: [
            { header: 'ID', accessor: 'id' },
            { header: 'Name', accessor: 'name' },
            { header: 'Role', accessor: 'role' },
            { header: 'Status', accessor: 'status' },
            {
                header: 'Score',
                accessor: 'score',
                isSortable: true,
                background: (value) => {
                    const v = value as number
                    if (v >= 90) {
                        return '#dcfce7'
                    }
                    if (v >= 70) {
                        return '#fef9c3'
                    }
                    return '#fee2e2'
                }
            }
        ] as Array<ColumnProps<Row>>
    },
    parameters: {
        docs: {
            description: {
                story: 'The column `background` function returns a CSS colour string based on the cell value. Here the `score` column is colour-coded: green ≥ 90, yellow ≥ 70, red otherwise.'
            }
        }
    }
}

const WithExternalSortTemplate: StoryFn<TableProps<Row>> = () => {
    const [sort, setSort] = useState<SortConfig<Row> | undefined>(undefined)

    const columns: Array<ColumnProps<Row>> = [
        {
            header: 'Name',
            accessor: 'name',
            onChangeSort: (newSort) => setSort(newSort as SortConfig<Row>)
        },
        {
            header: 'Score',
            accessor: 'score',
            onChangeSort: (newSort) => setSort(newSort as SortConfig<Row>)
        },
        { header: 'Role', accessor: 'role' }
    ]

    return (
        <Table
            data={sampleData}
            columns={columns}
            sort={sort}
        />
    )
}

export const WithExternalSort = WithExternalSortTemplate.bind({})
WithExternalSort.storyName = 'With External Sort (API-side)'
WithExternalSort.parameters = {
    docs: {
        description: {
            story: 'When a column has `onChangeSort`, clicks fire the callback instead of sorting locally — ideal for server-side / paginated datasets. Pass the `sort` prop to keep the active sort indicator in sync.'
        }
    }
}
