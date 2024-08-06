import React from 'react'
import { Modal as M } from '@mantine/core'
import classes from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  title: string
  close: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, close, children, title }: ModalProps): JSX.Element {
  return (
    <M opened={isOpen} onClose={close} title={title} className={classes.root}>
      {children}
    </M>
  )
}
