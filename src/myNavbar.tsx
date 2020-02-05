import React from 'react'
import { Link } from 'react-router-dom'

class MyNavbar extends React.Component {
  public render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/Props">Props</Link>
        <Link to="/State">State</Link>
        <Link to="/Api">API</Link>
        <Link to="/Counter">Counter</Link>
      </div>
    )
  }
}

export default MyNavbar
