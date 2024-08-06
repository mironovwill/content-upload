import { notifications } from '@mantine/notifications'

export const showSuccessNotification = (message: string): void => {
  notifications.show({
    message,
    color: 'blue'
  })
}

export const showErrorNotification = (message: string): void => {
  notifications.show({
    message,
    color: 'red'
  })
}
