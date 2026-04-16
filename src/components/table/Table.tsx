import React, { useCallback, useState } from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'
import { Skeleton } from '../skeleton'

import { ColumnProps, SortConfig, TableProps } from './types'

import styles from './styles.module.sass'

export const Table = <T,>({
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
    verticalBorder,
    sort
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

    const handleSort = useCallback(
        (column: ColumnProps<T>) => {
            if (column.onChangeSort) {
                let direction: 'asc' | 'desc' = 'asc'
                if (sort && sort.key === column.accessor && sort.direction === 'asc') {
                    direction = 'desc'
                }
                column.onChangeSort({ key: column.accessor, direction })
                return
            }

            if (!column.isSortable) {
                return
            }

            let direction: 'asc' | 'desc' = 'asc'
            if (sortConfig && sortConfig.key === column.accessor && sortConfig.direction === 'asc') {
                direction = 'desc'
            }

            setSortConfig({ key: column.accessor, direction })
        },
        [sort, sortConfig]
    )

    const getSortIcon = (column: ColumnProps<T>) => {
        if (column.onChangeSort) {
            if (sort?.key !== column.accessor) {
                return ''
            }
            return sort.direction === 'asc' ? (
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
        }

        if (sortConfig?.key !== column.accessor) {
            return ''
        }
        return sortConfig.direction === 'asc' ? (
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
                                className={column.isSortable || column.onChangeSort ? styles.sortable : undefined}
                            >
                                {column.header}
                                {getSortIcon(column)}
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
                                        key={`td${rowIndex}${String(column.accessor)}`}
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
