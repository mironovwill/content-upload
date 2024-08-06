import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Button, Title, Group } from '@mantine/core'
import { useForm, UseFormReturnType } from '@mantine/form'
import FormComponent, { InputConfig } from '../components/Form/Form'
import { TopicIds } from '../../../main/types'
import Modal from '../components/Modal/Modal'
import DynamicTable, { TableColumn, ElementData } from '../components/Table/Table'
import {
  showSuccessNotification,
  showErrorNotification
} from '../components/Notification/notifications'

interface FormValues {
  nameRu: string
  id: string
  topicTypeId: string
}

const inputConfig: InputConfig[] = [
  {
    type: 'text',
    name: 'nameRu',
    label: 'Название топика на русском',
    placeholder: 'Название топика на русском',
    withAsterisk: true
  },
  {
    type: 'number',
    name: 'id',
    label: 'Topic Id',
    placeholder: 'Topic Id',
    withAsterisk: true
  },
  {
    type: 'number',
    name: 'topicTypeId',
    label: 'Topic type Id',
    placeholder: 'Topic type Id',
    withAsterisk: true
  }
]

const columns: TableColumn[] = [
  { key: 'id', header: 'Topic Id' },
  { key: 'topicTypeId', header: 'Topic type Id' },
  { key: 'nameRu', header: 'Название' }
]

export const TopicsTypes = (): JSX.Element => {
  const [topicIdsList, setTopicIdsList] = useState<TopicIds[]>(window.store.get('topicTypes') || [])
  const [opened, { open, close }] = useDisclosure(false)

  const form: UseFormReturnType<FormValues> = useForm<FormValues>({
    initialValues: {
      nameRu: '',
      id: '',
      topicTypeId: ''
    },
    validate: {
      nameRu: (value) => {
        if (value.trim() === '') {
          return 'Поле не должно быть пустым'
        }
        if (topicIdsList.some((el) => el.nameRu === value)) {
          return 'Введите уникальное название'
        }
        return null
      },
      id: (value) => {
        if (value.trim() === '') {
          return 'Поле не должно быть пустым'
        }
        return null
      },
      topicTypeId: (value) => {
        if (value.trim() === '') {
          return 'Поле не должно быть пустым'
        }
        return null
      }
    }
  })

  const elements: ElementData[] = topicIdsList.map((el, i) => ({
    position: i,
    nameRu: el.nameRu,
    id: el.id,
    topicTypeId: el.topicTypeId
  }))

  const handleSubmit = (): void => {
    try {
      const { nameRu, id, topicTypeId } = form.values
      const newTopic = { nameRu, topicTypeId: +topicTypeId, id: +id }
      const updatedList = [...topicIdsList, newTopic]

      setTopicIdsList(updatedList)
      window.store.set('topicTypes', updatedList) // Здесь стоит убедиться, что window.store действительно существует и работает

      showSuccessNotification('Тип топика был успешно добавлен')
    } catch (error) {
      showErrorNotification('Ошибка при добавлении типа топика')
    } finally {
      close()
      form.reset()
    }
  }

  const handleDelete = (id: number): void => {
    try {
      const updatedList = topicIdsList.filter((topic) => topic.id !== id)

      setTopicIdsList(updatedList)
      window.store.set('topicTypes', updatedList)

      showSuccessNotification('Тип топика был успешно удален')
    } catch (error) {
      showErrorNotification('Ошибка при удалении типа топика')
    }
  }

  return (
    <>
      <Title order={1}>Типы топиков</Title>
      <Modal isOpen={opened} title={'Добавить новый тип топика'} close={close}>
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
