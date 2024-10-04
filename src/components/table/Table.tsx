import React, { useState } from 'react'

import { cn } from '../../utils'
import Icon from '../icon'
import Skeleton from '../skeleton'

import styles from './styles.module.sass'

interface SortConfig<T> {
    key: keyof T
    direction: 'asc' | 'desc'
}

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
    /** Function to set background color based on the cell's value */
    background?: (value: T[keyof T], row: T) => string
    /** Formatter function to format the cell value */
    formatter?: (value: T[keyof T], row: T[], index: number) => React.ReactNode
}

/**
 * Table component properties
 */
export interface TableProps<T> {
    /** Data to be displayed in the table */
    data?: T[]
    /** Default sorting configuration for the table */
    defaultSort?: SortConfig<T>
    /** Additional class names for custom styling */
    className?: string
    /** Table height (in pixels or null for auto height) */
    height?: number | null
    /** Columns configuration for the table */
    columns?: ColumnProps<T>[]
    /** Whether the table is in loading state (displays skeletons) */
    loading?: boolean
    /** Whether the table header is sticky when scrolling */
    stickyHeader?: boolean
    /** Whether to show vertical borders between columns */
    verticalBorder?: boolean
}

const Table = <T,>({
    data,
    defaultSort,
    className,
    height,
    columns,
    loading,
    stickyHeader,
    verticalBorder
}: TableProps<T>) => {
    const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(defaultSort ?? null)

    const sortedData = React.useMemo(() => {
        if (!sortConfig) {
            return data
        }

        return [...(data || [])]?.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1
            }
            return 0
        })
    }, [data, sortConfig])

    const handleSort = (column: ColumnProps<T>) => {
        if (!column.isSortable) {
            return
        }

        let direction: 'asc' | 'desc' = 'asc'
        if (sortConfig && sortConfig.key === column.accessor && sortConfig.direction === 'asc') {
            direction = 'desc'
        }

        setSortConfig({ key: column.accessor, direction })
    }

    return (
        <div
            className={cn(className, styles.tableContainer, stickyHeader && styles.stickyHeader)}
            style={{ height: height ?? 'inherit' }}
        >
            <table className={cn(styles.table, verticalBorder && styles.verticalBorder)}>
                <thead>
                    <tr>
                        {columns?.map((column) => (
                            <th
                                key={String(column.accessor)}
                                onClick={() => handleSort(column)}
                                className={column.isSortable ? styles.sortable : undefined}
                            >
                                {column.header}
                                {sortConfig?.key === column.accessor ? (
                                    sortConfig.direction === 'asc' ? (
                                        <Icon name={'ArrowDown'} />
                                    ) : (
                                        <Icon name={'ArrowUp'} />
                                    )
                                ) : (
                                    ''
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading &&
                        Array(10)
                            .fill(0)
                            .map((_, index) => (
                                <tr key={`tr${index}`}>
                                    {columns?.map((column) => (
                                        <td
                                            key={String(column.accessor)}
                                            className={column.className}
                                        >
                                            <Skeleton style={{ width: '80%', height: 16, margin: '0 auto' }} />
                                        </td>
                                    ))}
                                </tr>
                            ))}

                    {!loading &&
                        sortedData?.map((row, rowIndex) => (
                            <tr key={`tr${rowIndex}`}>
                                {columns?.map((column) => (
                                    <td
                                        key={String(column.accessor)}
                                        className={column.className}
                                        style={
                                            column?.background
                                                ? { background: column?.background(row[column.accessor], row) }
                                                : {}
                                        }
                                    >
                                        {column.formatter
                                            ? column.formatter(row[column.accessor], sortedData, rowIndex)
                                            : (row[column.accessor] as any)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
