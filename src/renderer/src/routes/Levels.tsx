import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Button, Title, Group } from '@mantine/core'
import { useForm, UseFormReturnType } from '@mantine/form'
import FormComponent, { InputConfig } from '../components/Form/Form'
import { Level } from '../../../main/types'
import Modal from '../components/Modal/Modal'
import DynamicTable, { TableColumn, ElementData } from '../components/Table/Table'
import {
  showSuccessNotification,
  showErrorNotification
} from '../components/Notification/notifications'

interface FormValues {
  [key: string]: string
}

const inputConfig: InputConfig[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Название уровня',
    placeholder: 'Название уровня',
    withAsterisk: true
  },
  {
    type: 'number',
    name: 'id',
    label: 'Id уровня',
    placeholder: 'Id уровня',
    withAsterisk: true
  }
]

const columns: TableColumn[] = [
  { key: 'id', header: 'Id' },
  { key: 'name', header: 'Уровень' }
]

export const Levels = (): JSX.Element => {
  const [levelsList, setLevelsList] = useState<Level[]>(() => window.store.get('levels') || [])
  const [opened, { open, close }] = useDisclosure(false)

  const form: UseFormReturnType<FormValues> = useForm<FormValues>({
    initialValues: {
      name: '',
      id: ''
    },
    validate: {
      name: (value) => {
        if (!value.trim()) {
          return 'Название не должно быть пустым'
        }
        if (levelsList.some((el) => el.name === value)) {
          return 'Введите другое название'
        }
        return null
      },
      id: (value) => {
        if (!value.trim()) {
          return 'ID не должен быть пустым'
        }
        if (levelsList.some((el) => el.id === +value)) {
          return 'Введите другой ID'
        }
        return null
      }
    }
  })

  const elements: ElementData[] = levelsList.map((el, i) => {
    return {
      position: i,
      name: el.name,
      id: el.id
    }
  })

  const handleSubmit = (): void => {
    const { name, id } = form.values
    const newLevel = { name, id: +id }

    try {
      const updatedList = [...levelsList, newLevel]
      setLevelsList(updatedList)
      window.store.set('levels', updatedList)

      showSuccessNotification('Уровень был успешно добавлен')
    } catch (error) {
      showErrorNotification('Ошибка при добавлении уровня')
    } finally {
      close()
      form.reset()
    }
  }

  const handleDelete = (id: number): void => {
    try {
      const updatedList = levelsList.filter((level) => level.id !== id)
      setLevelsList(updatedList)
      window.store.set('levels', updatedList)

      showSuccessNotification('Уровень был успешно удален')
    } catch (error) {
      showErrorNotification('Ошибка при удалении уровня')
    }
  }

  return (
    <>
      <Title order={1}>Уровни</Title>
      <Modal isOpen={opened} title={'Добавить уровень'} close={close}>
        <FormComponent form={form} onSubmit={handleSubmit} inputs={inputConfig} />
      </Modal>
      <DynamicTable data={elements} columns={columns} handleDelete={handleDelete} />
      <Group justify="flex-end" mt="md">
        <Button size="sm" onClick={open}>
          Добавить
        </Button>
      </Group>
    </>
  )
}
