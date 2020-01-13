import React from 'react'
import ChildComponent from './child'
import { CounterContainer } from './container'

interface Props {
  amount: number
}

/**
 * Class Component
 */
export default class Counter extends React.Component {
  public render() {
    return (
      // Providerで括った範囲内でContainerのデータが扱える
      <CounterContainer.Provider>
        <h1>Use unstated-next</h1>
        <this.CouterOperate amount={1} />
        <this.CouterOperate amount={10} />
        <this.CouterOperate amount={-1} />
        <this.CouterReset />
        <ChildComponent />
      </CounterContainer.Provider>
    )
  }

  private CouterOperate: React.FC<Props> = props => {
    const counterContainer = CounterContainer.useContainer()
    const onClick = () => {
      counterContainer.add(props.amount)
    }
    return <button onClick={onClick}>{props.amount}</button>
  }

  private CouterReset: React.FC = () => {
    const counterContainer = CounterContainer.useContainer()
    const onClick = () => {
      counterContainer.reset()
    }
    return <button onClick={onClick}>Reset</button>
  }
}
