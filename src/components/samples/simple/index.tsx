import React from 'react'
import s from './styles.scss'
import { Button } from 'react-bootstrap'
import mySum from '../../../functions/mySum'

/**
 * functional component
 */
const simpleComponent = () => {
  const element = (
    <>
      <h1 className={s.hoge}>simpleComponent(use local styles: .hoge)</h1>
      <Button variant="primary">React Bootstrap Primary Buttom!!</Button>
      <p>{mySum(1, 1)}</p>
    </>
  )
  return element
}

export = simpleComponent
