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
      // Container.Providerで括った範囲内でContainerのデータが扱える
      <CounterContainer.Provider>
        <h1>Use unstated-next</h1>
        Add:
        <this.CouterAdd amount={1} />
        <this.CouterAdd amount={10} />
        <this.CouterAdd amount={-1} />
        <br />
        Multiplication:
        <this.CouterMultiplication amount={3} />
        <this.CouterMultiplication amount={2} />
        <this.CouterMultiplication amount={1} />
        <this.CouterMultiplication amount={0} />
        <this.CouterMultiplication amount={-1} />
        <this.CouterMultiplication amount={-2} />
        <this.CouterMultiplication amount={-3} />
        <br />
        <br />
        <this.CouterReset />
        <ChildComponent />
      </CounterContainer.Provider>
    )
  }

  private CouterAdd: React.FC<Props> = props => {
    const counterContainer = CounterContainer.useContainer()
    const onClick = () => {
      counterContainer.add(props.amount)
    }
    return <button onClick={onClick}>{props.amount}</button>
  }

  private CouterMultiplication: React.FC<Props> = props => {
    const counterContainer = CounterContainer.useContainer()
    const onClick = () => {
      counterContainer.multiplication(props.amount)
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
