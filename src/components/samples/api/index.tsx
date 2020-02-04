import axios from 'axios'
import React from 'react'
import './index.sass'

const endPoint = 'https://api.github.com/search/repositories'

// tslint:disable-next-line:no-empty-interface
interface Props {}

interface State {
  keyword: string
  status: number
  statusText: string
  totlaCount: number
}

export default class Api extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      keyword: 'react',
      status: 0,
      statusText: '--',
      totlaCount: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  public render() {
    return (
      <div className="app">
        <h1 className="hoge">API(use global styles: .hoge)</h1>
        <input
          type="text"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <p>Status: {this.state.status} </p>
        <p>StatusText: {this.state.statusText} </p>
        <p>Totla count: {this.state.totlaCount} </p>
        <input
          type="button"
          value="Search on GitHub"
          onClick={() => this.get()}
        />
      </div>
    )
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ keyword: event.target.value })
  }

  private get() {
    axios
      .get(endPoint, { params: { q: this.state.keyword } })
      .then(results => {
        this.setState({
          status: results.status,
          statusText: results.statusText,
          totlaCount: results.data.total_count
        })
      })
      .catch(e => {
        alert(`[${e.name}] ${e.message}`)
        this.setState({
          status: 0,
          statusText: '--',
          totlaCount: 0
        })
      })
  }
}
