import React from 'react'
import './index.sass'

interface Props {
  value: string
}

// tslint:disable-next-line:no-empty-interface
interface State {}

export default class PropsChild extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  public render() {
    return <p className="props-child">{this.props.value}</p>
  }
}
