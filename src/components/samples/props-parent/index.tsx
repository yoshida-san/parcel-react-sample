import React from 'react'
import PropsChild from '../props-child'
import './index.sass'

export default class PropsParent extends React.Component {
  public render() {
    return <PropsChild value="I'm parent!" />
  }
}
