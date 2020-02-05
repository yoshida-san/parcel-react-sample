import React from 'react'
import s from './styles.scss'
import { Button } from 'react-bootstrap'

/**
 * functional component
 */
const simpleComponent = () => {
  const element = (
    <>
      <h1 className={s.hoge}>simpleComponent(use local styles: .hoge)</h1>
      <Button variant="primary">React Bootstrap Primary Buttom!!</Button>
    </>
  )
  return element
  // or
  // return <h1>simpleComponent !!</h1>
}

export = simpleComponent
