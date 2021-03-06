import React from 'react'
import './index.sass'

// tslint:disable-next-line:no-empty-interface
interface Props {}

interface State {
  num: number
}

/**
 * Class Component
 */
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
        <this.addButtom />
        <this.resetButtom />
      </div>
    )
  }

  private addButtom: React.FC = () => {
    return (
      <button
        onClick={() => this.setState({ num: this.increment(this.state.num) })}
      >
        Click({this.state.num})
      </button>
    )
  }

  private resetButtom: React.FC = () => {
    return <button onClick={() => this.valCheck()}>Reset</button>
  }

  private valCheck = () => {
    this.state.num === 0
      ? alert(`this.state.num is ${this.state.num}`)
      : this.setState({ num: 0 })
  }

  private increment = (i: number): number => {
    return ++i
  }
}
