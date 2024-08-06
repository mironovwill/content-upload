import { useForm } from '@mantine/form'
import { Button, Group, TextInput, Title } from '@mantine/core'
import { useState } from 'react'
import { ApiSettings } from '../../../main/types'
import { notifications } from '@mantine/notifications'

export const API = (): JSX.Element => {
  const [apiSettings] = useState<ApiSettings>(window.store.get('apiSettings') || [])

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      baseUrl: apiSettings?.baseUrl,
      token: apiSettings?.token,
      fileUploadApi: apiSettings?.fileUploadApi,
      topicCreateApi: apiSettings?.topicCreateApi,
      uploadPresentation: apiSettings?.uploadPresentation,
      uploadVideo: apiSettings?.uploadVideo,
      uploadScorm: apiSettings?.uploadScorm,
      createBlockPlanApi: apiSettings?.createBlockPlanApi
    },
    validate: {
      baseUrl: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null),
      token: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null),
      fileUploadApi: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null),
      topicCreateApi: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null),
      uploadPresentation: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null),
      uploadVideo: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null),
      uploadScorm: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null),
      createBlockPlanApi: (value) => (value.trim() === '' ? 'Поле не должно быть пустым' : null)
    }
  })

  return (
    <>
      <Title order={1}>API</Title>
      <form
        onSubmit={form.onSubmit((values) => {
          window.store.set('apiSettings', values || [])
          notifications.show({
            message: 'Настройки успешно сохранены',
            color: 'green'
          })
        })}
      >
        <TextInput
          withAsterisk
          label="Базовый урл"
          placeholder="https://admin.lms-russia.ru"
          key={form.key('baseUrl')}
          {...form.getInputProps('baseUrl')}
        />
        <TextInput
          withAsterisk
          label="Token"
          placeholder="Token"
          key={form.key('token')}
          {...form.getInputProps('token')}
        />
        <TextInput
          withAsterisk
          label="Патч загрузки файла"
          placeholder="/api/v1/service/file"
          key={form.key('fileUploadApi')}
          {...form.getInputProps('fileUploadApi')}
        />
        <TextInput
          withAsterisk
          label="Патч создания топика"
          placeholder="/api/v1/topic"
          key={form.key('topicCreateApi')}
          {...form.getInputProps('topicCreateApi')}
        />
        <TextInput
          withAsterisk
          label="Патч загрузки презентации"
          placeholder="/api/v1/presentation/upload"
          key={form.key('uploadPresentation')}
          {...form.getInputProps('uploadPresentation')}
        />
        <TextInput
          withAsterisk
          label="Патч загрузки видео"
          placeholder="/api/v1/video/upload"
          key={form.key('uploadVideo')}
          {...form.getInputProps('uploadVideo')}
        />
        <TextInput
          withAsterisk
          label="Патч загрузки SCORM"
          placeholder="/api/v1/scorm/upload"
          key={form.key('uploadScorm')}
          {...form.getInputProps('uploadScorm')}
        />
        <TextInput
          withAsterisk
          label="Патч создания блок плана"
          placeholder="/api/v1/block/"
          key={form.key('createBlockPlanApi')}
          {...form.getInputProps('createBlockPlanApi')}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Сохранить</Button>
        </Group>
      </form>
    </>
  )
}
