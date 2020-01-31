import React from 'react'
import { CounterContainer } from './container'
import { GlobalContainer } from '../globalContainer'

/**
 * Class Component
 */
export default class ChildComponent extends React.Component {
  public render() {
    return <this.CouterDisplay />
  }

  private CouterDisplay: React.FC = () => {
    const counterContainer = CounterContainer.useContainer()
    const globalContainer = GlobalContainer.useContainer()
    const globalContainerChange = () => {
      globalContainer.change()
    }
    const globalContainerReset = () => {
      globalContainer.reset()
    }
    return (
      <div>
        <p>counterContainer.count : {counterContainer.count}</p>
        <p>globalContainer.value : {globalContainer.value}</p>
        <p>
          <button onClick={globalContainerChange}>
            globalContainer.value change!!
          </button>
        </p>
        <p>
          <button onClick={globalContainerReset}>
            globalContainer.value reset!!
          </button>
        </p>
      </div>
    )
  }
}
