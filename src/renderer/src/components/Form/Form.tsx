import React from 'react'
import { Button, Box, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import classes from './Form.module.css'

export interface InputConfig {
  type: 'text' | 'number'
  name: string
  label: string
  placeholder?: string
  withAsterisk?: boolean
}

interface FormComponentProps {
  form: UseFormReturnType<any>
  onSubmit: (values: any) => void
  inputs: InputConfig[]
}

const FormComponent: React.FC<FormComponentProps> = ({ form, onSubmit, inputs }) => {
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      {inputs.map((input) => (
        <TextInput
          key={input.name}
          withAsterisk={input.withAsterisk}
          label={input.label}
          placeholder={input.placeholder}
          {...form.getInputProps(input.name)}
        />
      ))}

      <Box className={classes.buttonsGroup}>
        <Button type="submit">Добавить</Button>
      </Box>
    </form>
  )
}

export default FormComponent
