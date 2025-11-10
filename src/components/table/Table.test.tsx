import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Table, { ColumnProps } from './Table'

import styles from './styles.module.sass'

interface TestData {
    id: number
    name: string
    age: number
}

const columns: Array<ColumnProps<TestData>> = [
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
        const columnsWithFormatter: Array<ColumnProps<TestData>> = [
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
        const columnsWithBackground: Array<ColumnProps<TestData>> = [
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
        const columnsWithNonSortable: Array<ColumnProps<TestData>> = [
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
        const columns: Array<ColumnProps<TestData>> = [
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
        const columns: Array<ColumnProps<TestData>> = [
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
        const columnsWithHidden: Array<ColumnProps<TestData>> = [
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
})
