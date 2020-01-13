import React from 'react'
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
      <CounterContainer.Provider>
        <h1>Use unstated-next</h1>
        <this.CouterOperate amount={1} />
        <this.CouterOperate amount={10} />
        <this.CouterOperate amount={-1} />
        <this.CouterReset />
        <this.CouterDisplay />
        <this.CouterDisplay />
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

  private CouterDisplay: React.FC = () => {
    const counterContainer = CounterContainer.useContainer()
    return <div>count : {counterContainer.count}</div>
  }
}
