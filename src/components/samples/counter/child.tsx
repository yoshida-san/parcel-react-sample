import React from 'react'
import { CounterContainer } from './container'

/**
 * Class Component
 */
export default class ChildComponent extends React.Component {
  public render() {
    return <this.CouterDisplay />
  }

  private CouterDisplay: React.FC = () => {
    const counterContainer = CounterContainer.useContainer()
    return <div>count : {counterContainer.count}</div>
  }
}
