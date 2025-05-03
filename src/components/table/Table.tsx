import React, { useState } from 'react'

import { ElementSizeType } from '../../types'
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
    /** Whether the column is hidden */
    hidden?: boolean
    /** Function to set background color based on the cell's value */
    background?: (value: T[keyof T], row: T) => string | undefined
    /** Formatter function to format the cell value */
    formatter?: (value: T[keyof T], row: T[], index: number) => React.ReactNode
}

/**
 * Table component properties
 */
export interface TableProps<T> {
    /** Data to be displayed in the table */
    data?: T[]
    /** Size (height) of the table rows */
    size?: ElementSizeType
    /** Default sorting configuration for the table */
    defaultSort?: SortConfig<T>
    /** Additional class names for custom styling */
    className?: string
    /** Caption to display when there is no data */
    noDataCaption?: string
    /** Table height (in pixels or null for auto height) */
    height?: number | null
    /** Table max height - the maximum height of the table, if there is little data, the table will not stretch.
     * The values of height and maxHeight are needed for the stickyHeader to work.
     * In summary: height is used if the container needs to be strictly fixed in height, and maxHeight - if it is not critical
     * that the height of the container will change dynamically up to the maximum value */
    maxHeight?: number | null
    /** Column configuration for the table */
    columns?: Array<ColumnProps<T>>
    /** Whether the table is in loading state (displays skeletons) */
    loading?: boolean
    /** Whether the table header is sticky when scrolling */
    stickyHeader?: boolean
    /** Whether to show vertical borders between columns */
    verticalBorder?: boolean
}

const Table = <T,>({
    data,
    size = 'medium',
    defaultSort,
    className,
    noDataCaption,
    height,
    maxHeight,
    columns,
    loading,
    stickyHeader,
    verticalBorder
}: TableProps<T>) => {
    const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(defaultSort ?? null)

    const visibleColumns = columns?.filter(({ hidden }) => !hidden)

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
            style={{ height: height || 'inherit', maxHeight: maxHeight || 'inherit' }}
        >
            <table className={cn(styles.table, verticalBorder && styles.verticalBorder, size && styles[size])}>
                <thead>
                    <tr>
                        {visibleColumns?.map((column) => (
                            <th
                                key={String(column.accessor)}
                                onClick={() => handleSort(column)}
                                className={column.isSortable ? styles.sortable : undefined}
                            >
                                {column.header}
                                {sortConfig?.key === column.accessor ? (
                                    sortConfig.direction === 'asc' ? (
                                        <Icon
                                            name={'ArrowDown'}
                                            style={{ width: 14, height: 14 }}
                                        />
                                    ) : (
                                        <Icon
                                            name={'ArrowUp'}
                                            style={{ width: 14, height: 14 }}
                                        />
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
                                    {visibleColumns?.map((column) => (
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
                                {visibleColumns?.map((column) => (
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
                                            : (row[column.accessor] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))}

                    {!loading && !sortedData?.length && (
                        <tr>
                            <td
                                colSpan={visibleColumns?.length}
                                className={styles.noData}
                            >
                                {noDataCaption || 'No data'}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
