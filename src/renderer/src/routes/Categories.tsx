import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Button, Title, Group } from '@mantine/core'
import { useForm, UseFormReturnType } from '@mantine/form'
import FormComponent, { InputConfig } from '../components/Form/Form'
import { CategoriesIds } from '../../../main/types'
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
    label: 'Название категории',
    placeholder: 'Название категории',
    withAsterisk: true
  },
  {
    type: 'number',
    name: 'id',
    label: 'Id категории',
    placeholder: 'Id категории',
    withAsterisk: true
  }
]

const columns: TableColumn[] = [
  { key: 'id', header: 'Id' },
  { key: 'name', header: 'Название' }
]

export const Categories = (): JSX.Element => {
  const [categoryList, setCategoryList] = useState<CategoriesIds[]>(
    window.store.get('categoryIds') || []
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
        if (categoryList.some((el) => el.name === value)) {
          return 'Введите другое название'
        }
        return null
      },
      id: (value) => {
        if (!value.trim()) {
          return 'ID не должен быть пустым'
        }
        if (categoryList.some((el) => el.id === +value)) {
          return 'Введите другой ID'
        }
        return null
      }
    }
  })

  const elements: ElementData[] = categoryList.map((el, i) => {
    return {
      position: i,
      name: el.name,
      id: el.id
    }
  })

  const handleSubmit = (): void => {
    try {
      const { name, id } = form.values
      const newCategory = { name, id: +id }
      const updatedList = [...categoryList, newCategory]
      setCategoryList(updatedList)
      window.store.set('categoryIds', updatedList)

      showSuccessNotification('Категория была успешно добавлена')
    } catch (error) {
      showErrorNotification('Ошибка при добавлении категории')
    } finally {
      close()
      form.reset()
    }
  }

  const handleDelete = (id: number): void => {
    try {
      const updatedList = categoryList.filter((category) => category.id !== id)
      setCategoryList(updatedList)
      window.store.set('categoryIds', updatedList)

      showSuccessNotification('Категория была успешно удалена')
    } catch (error) {
      showErrorNotification('Ошибка при удалении категории')
    }
  }

  return (
    <>
      <Title order={1}>Категории</Title>
      <Modal isOpen={opened} title={'Добавить категорию'} close={close}>
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
