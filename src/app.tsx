import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Api from './components/samples/api'
import Counter from './components/samples/counter/index'
import Props from './components/samples/props-parent'
import Simple from './components/samples/simple'
import State from './components/samples/state'
import Navbar from './navbar'
import { GlobalContainer } from './components/samples/globalContainer'

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <GlobalContainer.Provider>
              <Route exact path="/" component={Simple} />
              <Route exact path="/Props" component={Props} />
              <Route exact path="/State" component={State} />
              <Route exact path="/Api" component={Api} />
              <Route exact path="/Counter" component={Counter} />
              <Route component={() => <Redirect to="/" />} />
            </GlobalContainer.Provider>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
