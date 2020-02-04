import React from 'react'
import s from './styles.scss'

/**
 * functional component
 */
const simpleComponent = () => {
  const element = (
    <h1 className={s.hoge}>simpleComponent(use local styles: .hoge)</h1>
  )
  return element
  // or
  // return <h1>simpleComponent !!</h1>
}

export = simpleComponent
