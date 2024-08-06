import React from 'react'
import { Table, Button } from '@mantine/core'

export interface ElementData {
  id: number
  [key: string]: number | string
}

export interface TableColumn {
  key: string
  header: string
}

interface DynamicTableProps {
  data: ElementData[]
  columns: TableColumn[]
  handleDelete: (key: number) => void
}

const DynamicTable: React.FC<DynamicTableProps> = ({ data, columns, handleDelete }) => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {columns.map((column) => (
            <Table.Th key={column.key}>{column.header}</Table.Th>
          ))}
          <Table.Th>Действия</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((element) => (
          <Table.Tr key={element.id}>
            {columns.map((column) => (
              <Table.Td key={column.key}>{element[column.key]}</Table.Td>
            ))}
            <Table.Td>
              <Button onClick={() => handleDelete(element.id)} color="red">
                Удалить
              </Button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}

export default DynamicTable
