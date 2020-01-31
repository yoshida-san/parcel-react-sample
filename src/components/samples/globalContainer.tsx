import { useState } from 'react'
import { createContainer } from 'unstated-next'

const useGlobalContainer = () => {
  const [value, setValue] = useState<string>('default value')

  const set = () => {
    setValue((val: string): string => {
      return val
    })
  }

  const change = () => {
    setValue('changed value!!')
  }

  const reset = () => {
    setValue('default value')
  }

  return { value, set, change, reset }
}

export const GlobalContainer = createContainer(useGlobalContainer)
