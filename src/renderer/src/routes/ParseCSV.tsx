import { Box, Title, FileInput, Button, Group } from '@mantine/core'
import { IconCsv } from '@tabler/icons-react'

export const ParseCSV = (): JSX.Element => {
  const icon = <IconCsv style={{ width: 14, height: 14 }} stroke={1.5} />

  return (
    <>
      <Title order={1}>Парсинг CSV</Title>
      <Box>
        <FileInput
          leftSection={icon}
          label="Выберете CSV файл"
          placeholder="CSV файл"
          leftSectionPointerEvents="none"
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Спарсить</Button>
        </Group>
      </Box>
    </>
  )
}
