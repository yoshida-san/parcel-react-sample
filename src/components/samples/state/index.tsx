import React from 'react'
import './index.sass'

// tslint:disable-next-line:no-empty-interface
interface Props {}

interface State {
  num: number
}

export default class StateSample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  public render() {
    return (
      <div>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          Click({this.state.num})
        </button>
        <button onClick={() => this.setState({ num: 0 })}>Reset</button>
      </div>
    )
  }
}
