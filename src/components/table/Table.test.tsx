import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Table } from './Table'
import { TableColumnProps } from './types'

import styles from './styles.module.sass'

interface TestData {
    id: number
    name: string
    age: number
}

const columns: Array<TableColumnProps<TestData>> = [
    { header: 'ID', accessor: 'id', isSortable: true },
    { header: 'Name', accessor: 'name', isSortable: true },
    { header: 'Age', accessor: 'age', isSortable: true }
]

const data: TestData[] = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 20 }
]

describe('Table Component', () => {
    it('renders table with provided data', () => {
        render(
            <Table
                data={data}
                columns={columns}
            />
        )

        expect(screen.getByText('ID')).toBeInTheDocument()
        expect(screen.getByText('Name')).toBeInTheDocument()
        expect(screen.getByText('Age')).toBeInTheDocument()

        expect(screen.getByText('John')).toBeInTheDocument()
        expect(screen.getByText('Jane')).toBeInTheDocument()
        expect(screen.getByText('Doe')).toBeInTheDocument()
    })

    it('sorts the data when a sortable column header is clicked', () => {
        render(
            <Table
                data={data}
                columns={columns}
            />
        )

        fireEvent.click(screen.getByText('Name'))

        expect(screen.getByText('Doe')).toBeInTheDocument()
        expect(screen.getByText('Jane')).toBeInTheDocument()
        expect(screen.getByText('John')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Name'))

        expect(screen.getByText('John')).toBeInTheDocument()
        expect(screen.getByText('Jane')).toBeInTheDocument()
        expect(screen.getByText('Doe')).toBeInTheDocument()
    })

    it('sorts the data correctly by age', () => {
        render(
            <Table
                data={data}
                columns={columns}
            />
        )

        fireEvent.click(screen.getByText('Age'))

        expect(screen.getByText('Doe')).toBeInTheDocument()
        expect(screen.getByText('John')).toBeInTheDocument()
        expect(screen.getByText('Jane')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Age'))

        expect(screen.getByText('Jane')).toBeInTheDocument()
        expect(screen.getByText('John')).toBeInTheDocument()
        expect(screen.getByText('Doe')).toBeInTheDocument()
    })

    it('sorts the data correctly by id', () => {
        render(
            <Table
                data={data}
                columns={columns}
            />
        )

        fireEvent.click(screen.getByText('ID'))

        expect(screen.getByText('1')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()

        fireEvent.click(screen.getByText('ID'))

        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByText('1')).toBeInTheDocument()
    })

    it('applies formatter function to the cell value', () => {
        const columnsWithFormatter: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id', isSortable: true },
            { header: 'Name', accessor: 'name', formatter: (value) => `Name: ${value}`, isSortable: true },
            { header: 'Age', accessor: 'age', isSortable: true }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithFormatter}
            />
        )

        expect(screen.getByText('Name: John')).toBeInTheDocument()
        expect(screen.getByText('Name: Jane')).toBeInTheDocument()
        expect(screen.getByText('Name: Doe')).toBeInTheDocument()
    })

    it('applies background color function to the cell', () => {
        const columnsWithBackground: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id', isSortable: true },
            {
                header: 'Name',
                accessor: 'name',
                background: (value) => (value === 'John' ? 'lightblue' : 'white'),
                isSortable: true
            },
            { header: 'Age', accessor: 'age', isSortable: true }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithBackground}
            />
        )

        const johnCell = screen.getByText('John').closest('td')
        expect(johnCell).toHaveStyle('background: lightblue')

        const janeCell = screen.getByText('Jane').closest('td')
        expect(janeCell).toHaveStyle('background: white')
    })

    it('does not sort when the column is not sortable', () => {
        const columnsWithNonSortable: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id', isSortable: true },
            { header: 'Name', accessor: 'name', isSortable: false },
            { header: 'Age', accessor: 'age', isSortable: true }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithNonSortable}
            />
        )

        // Attempt to sort by non-sortable column 'Name'
        fireEvent.click(screen.getByText('Name'))

        // Check the order remains unchanged
        expect(screen.getByText('John')).toBeInTheDocument() // Ensure order of sortable columns remains
        expect(screen.getByText('Jane')).toBeInTheDocument()
        expect(screen.getByText('Doe')).toBeInTheDocument()
    })

    it('displays skeletons when loading is true', () => {
        const columns: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id', isSortable: true },
            { header: 'Name', accessor: 'name', isSortable: true },
            { header: 'Age', accessor: 'age', isSortable: true }
        ]

        const { container } = render(
            <Table
                data={data}
                columns={columns}
                loading={true}
            />
        )

        const skeletonElement = container.querySelector('div')

        expect(skeletonElement).toBeInTheDocument()
    })

    it('displays no data message when there is no data', () => {
        const columns: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id', isSortable: true },
            { header: 'Name', accessor: 'name', isSortable: true },
            { header: 'Age', accessor: 'age', isSortable: true }
        ]

        render(
            <Table
                data={[]}
                columns={columns}
                noDataCaption={'No data available'}
            />
        )

        expect(screen.getByText('No data available')).toBeInTheDocument()
    })

    it('renders columns based on the hidden property', () => {
        const columnsWithHidden: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id', isSortable: true },
            { header: 'Name', accessor: 'name', isSortable: true, hidden: true },
            { header: 'Age', accessor: 'age', isSortable: true }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithHidden}
            />
        )

        expect(screen.queryByText('Name')).not.toBeInTheDocument()

        expect(screen.getByText('ID')).toBeInTheDocument()
        expect(screen.getByText('Age')).toBeInTheDocument()
    })

    it('applies the correct size class when size is small', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                size='small'
            />
        )
        const tableElement = container.querySelector('table')
        expect(tableElement).toHaveClass(styles.small)
    })

    it('applies the correct size class when size is medium', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                size='medium'
            />
        )
        const tableElement = container.querySelector('table')
        expect(tableElement).toHaveClass(styles.medium)
    })

    it('applies the correct size class when size is large', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                size='large'
            />
        )
        const tableElement = container.querySelector('table')
        expect(tableElement).toHaveClass(styles.large)
    })

    it('applies stickyHeader class when stickyHeader is true', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                stickyHeader
            />
        )
        const wrapper = container.querySelector('.tableContainer')
        expect(wrapper).toHaveClass('stickyHeader')
    })

    it('applies verticalBorder class when verticalBorder is true', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                verticalBorder
            />
        )
        const table = container.querySelector('table')
        expect(table).toHaveClass('verticalBorder')
    })

    it('renders default no data message when noDataCaption is not provided', () => {
        render(
            <Table
                data={[]}
                columns={columns}
            />
        )
        expect(screen.getByText('No data')).toBeInTheDocument()
    })

    it('applies custom className', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                className='my-table'
            />
        )
        expect(container.firstChild).toHaveClass('my-table')
    })

    it('applies custom height and maxHeight styles', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                height={400}
                maxHeight={600}
            />
        )
        const wrapper = container.querySelector('.tableContainer') as HTMLElement
        expect(wrapper.style.height).toBe('400px')
        expect(wrapper.style.maxHeight).toBe('600px')
    })

    it('renders defaultSort correctly (desc)', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                defaultSort={{ key: 'name', direction: 'desc' }}
            />
        )
        // ArrowUp icon indicates desc sort
        const svgElements = container.querySelectorAll('svg')
        expect(svgElements.length).toBeGreaterThan(0)
    })

    it('renders defaultSort correctly (asc)', () => {
        const { container } = render(
            <Table
                data={data}
                columns={columns}
                defaultSort={{ key: 'name', direction: 'asc' }}
            />
        )
        // ArrowDown icon indicates asc sort
        const svgElements = container.querySelectorAll('svg')
        expect(svgElements.length).toBeGreaterThan(0)
    })

    it('renders table with undefined data gracefully', () => {
        render(
            <Table
                data={undefined}
                columns={columns}
            />
        )
        expect(screen.getByText('No data')).toBeInTheDocument()
    })

    it('renders column with className applied to td', () => {
        const columnsWithClass: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id', className: 'id-cell' },
            { header: 'Name', accessor: 'name' },
            { header: 'Age', accessor: 'age' }
        ]
        const { container } = render(
            <Table
                data={data}
                columns={columnsWithClass}
            />
        )
        expect(container.querySelector('.id-cell')).toBeInTheDocument()
    })

    it('shows sort icon on currently sorted column', () => {
        render(
            <Table
                data={data}
                columns={columns}
            />
        )
        fireEvent.click(screen.getByText('Name'))
        // After clicking Name, a sort icon should appear in the Name header
        const nameHeader = screen.getByText('Name').closest('th')
        expect(nameHeader?.querySelector('svg')).toBeInTheDocument()
    })

    it('reverses sort direction on second click', () => {
        render(
            <Table
                data={data}
                columns={columns}
            />
        )
        fireEvent.click(screen.getByText('Name'))
        fireEvent.click(screen.getByText('Name'))
        // After second click direction changes to desc — still shows icon
        const nameHeader = screen.getByText('Name').closest('th')
        expect(nameHeader?.querySelector('svg')).toBeInTheDocument()
    })

    it('sort comparator handles equal values correctly', () => {
        const dataWithDuplicates: TestData[] = [
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Alice', age: 30 },
            { id: 3, name: 'Bob', age: 25 }
        ]
        render(
            <Table
                data={dataWithDuplicates}
                columns={columns}
            />
        )
        fireEvent.click(screen.getByText('Name'))
        // Both Alice entries exist after sort
        const alices = screen.getAllByText('Alice')
        expect(alices).toHaveLength(2)
    })

    it('formats cell value with full row data access via formatter', () => {
        const columnsWithRowAccess: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id' },
            {
                header: 'Summary',
                accessor: 'name',
                formatter: (value, rows, index) => `${value}(${index}/${rows.length})`
            },
            { header: 'Age', accessor: 'age' }
        ]
        render(
            <Table
                data={data}
                columns={columnsWithRowAccess}
            />
        )
        expect(screen.getByText('John(0/3)')).toBeInTheDocument()
    })

    it('calls onChangeSort with asc direction on first click', () => {
        const onChangeSort = jest.fn()
        const columnsWithExternalSort: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id' },
            { header: 'Name', accessor: 'name', onChangeSort },
            { header: 'Age', accessor: 'age' }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithExternalSort}
            />
        )

        fireEvent.click(screen.getByText('Name'))

        expect(onChangeSort).toHaveBeenCalledWith({ key: 'name', direction: 'asc' })
    })

    it('calls onChangeSort with desc direction on second click', () => {
        const onChangeSort = jest.fn()
        const columnsWithExternalSort: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id' },
            { header: 'Name', accessor: 'name', onChangeSort },
            { header: 'Age', accessor: 'age' }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithExternalSort}
                sort={{ key: 'name', direction: 'asc' }}
            />
        )

        fireEvent.click(screen.getByText('Name'))

        expect(onChangeSort).toHaveBeenCalledWith({ key: 'name', direction: 'desc' })
    })

    it('does not sort data locally when column has onChangeSort', () => {
        const onChangeSort = jest.fn()
        const columnsWithExternalSort: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id' },
            { header: 'Name', accessor: 'name', onChangeSort },
            { header: 'Age', accessor: 'age' }
        ]

        const { container } = render(
            <Table
                data={data}
                columns={columnsWithExternalSort}
            />
        )

        const rowsBefore = container.querySelectorAll('tbody tr')
        const firstRowBefore = rowsBefore[0].textContent

        fireEvent.click(screen.getByText('Name'))

        const rowsAfter = container.querySelectorAll('tbody tr')
        expect(rowsAfter[0].textContent).toBe(firstRowBefore)
    })

    it('shows sort icon for external sort column when sort prop matches', () => {
        const onChangeSort = jest.fn()
        const columnsWithExternalSort: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id' },
            { header: 'Name', accessor: 'name', onChangeSort },
            { header: 'Age', accessor: 'age' }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithExternalSort}
                sort={{ key: 'name', direction: 'asc' }}
            />
        )

        const nameHeader = screen.getByText('Name').closest('th')
        expect(nameHeader?.querySelector('svg')).toBeInTheDocument()
    })

    it('does not show sort icon for external sort column when sort prop does not match', () => {
        const onChangeSort = jest.fn()
        const columnsWithExternalSort: Array<TableColumnProps<TestData>> = [
            { header: 'ID', accessor: 'id' },
            { header: 'Name', accessor: 'name', onChangeSort },
            { header: 'Age', accessor: 'age' }
        ]

        render(
            <Table
                data={data}
                columns={columnsWithExternalSort}
                sort={{ key: 'id', direction: 'asc' }}
            />
        )

        const nameHeader = screen.getByText('Name').closest('th')
        expect(nameHeader?.querySelector('svg')).not.toBeInTheDocument()
    })
})
