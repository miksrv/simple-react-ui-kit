import React from 'react'

import { ElementSizeType } from '../../types'

/**
 * Column properties for table component
 */
export interface TableColumnProps<T> {
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
    /** External sort callback. When provided, clicking this column header fires the callback
     *  instead of sorting data locally. Use together with TableProps.sort to show the active indicator. */
    onChangeSort?: (sort: TableSortConfig<T>) => void
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
    defaultSort?: TableSortConfig<T>
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
    columns?: Array<TableColumnProps<T>>
    /** Whether the table is in loading state (displays skeletons) */
    loading?: boolean
    /** Whether the table header is sticky when scrolling */
    stickyHeader?: boolean
    /** Whether to show vertical borders between columns */
    verticalBorder?: boolean
    /** Controlled sort state for external (server-side) sorting.
     *  Pass this together with column.onChangeSort to display the active sort indicator. */
    sort?: TableSortConfig<T>
}

/**
 * Sorting configuration
 */
export interface TableSortConfig<T> {
    /** Key to sort by */
    key: keyof T
    /** Sort direction */
    direction: 'asc' | 'desc'
}
