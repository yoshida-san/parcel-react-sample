import { useState } from 'react'
import { createContainer } from 'unstated-next'

const useCountContainer = () => {
  const [count, setCount] = useState<number>(0)

  const add = (amount: number) => {
    setCount((i: number): number => {
      return i + amount
    })
  }

  const reset = () => {
    setCount(0)
  }

  return { count, add, reset }
}

export const CounterContainer = createContainer(useCountContainer)
