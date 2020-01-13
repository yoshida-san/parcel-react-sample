import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'

// export default class Simple extends React.Component {
//   public render() {
//     return (
//       <div>
//         <h1>Hello Parcel + React !!</h1>
//       </div>
//     )
//   }
// }

const simpleComponent = () => {
  const element = <h1>simpleComponent !!</h1>
  return element
  // or
  // return <h1>simpleComponent !!</h1>
}

export = simpleComponent
