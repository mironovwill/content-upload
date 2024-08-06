import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Button, Title, Group } from '@mantine/core'
import { useForm, UseFormReturnType } from '@mantine/form'
import FormComponent, { InputConfig } from '../components/Form/Form'
import { LanguageId } from '../../../main/types'
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
    label: 'Название языка',
    placeholder: 'Название языка',
    withAsterisk: true
  },
  {
    type: 'number',
    name: 'id',
    label: 'Id языка',
    placeholder: 'Id языка',
    withAsterisk: true
  }
]

const columns: TableColumn[] = [
  { key: 'id', header: 'Id' },
  { key: 'name', header: 'Название' }
]

export const Languages = (): JSX.Element => {
  const [languagesList, setLanguagesList] = useState<LanguageId[]>(
    window.store.get('languageIds') || []
  )
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
        if (languagesList.some((el) => el.name === value)) {
          return 'Введите другое название'
        }
        return null
      },
      id: (value) => {
        if (!value.trim()) {
          return 'ID не должен быть пустым'
        }
        if (languagesList.some((el) => el.id === +value)) {
          return 'Введите другой ID'
        }
        return null
      }
    }
  })

  const elements: ElementData[] = languagesList.map((el, i) => {
    return {
      position: i,
      name: el.name,
      id: el.id
    }
  })

  const handleSubmit = (): void => {
    try {
      const { name, id } = form.values
      if (languagesList.some((l) => l.id === +id)) return

      const newLevel = { name, id: +id }
      const updatedList = [...languagesList, newLevel]
      setLanguagesList(updatedList)
      window.store.set('languageIds', updatedList)

      showSuccessNotification('Язык был успешно добавлен')
    } catch (error) {
      showErrorNotification('Ошибка при добавлении языка')
    } finally {
      close()
      form.reset()
    }
  }

  const handleDelete = (id: number): void => {
    try {
      const updatedList = languagesList.filter((language) => language.id !== id)
      setLanguagesList(updatedList)
      window.store.set('languageIds', updatedList)

      showSuccessNotification('Язык был успешно удален')
    } catch (error) {
      showErrorNotification('Ошибка при удалении языка')
    }
  }

  return (
    <>
      <Title order={1}>Языки</Title>
      <Modal isOpen={opened} title={'Добавить язык'} close={close}>
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
