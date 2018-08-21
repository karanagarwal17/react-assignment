import React, { Component } from 'react'

import DataFetch from './DataFetch'

class App extends Component {
  constructor(){
    super()

    this.state = {
      url: '',
      depth: ''
    }

    this.onChangeUrl = ev => {
      this.setState({
        url: ev.target.value
      })
    }

    this.onChangeDepth = ev => {
      this.setState({
        depth: ev.target.value
      })
    }
  }

  render() {
    return (
      <div className="App">
          <input value={this.state.url} placeholder="input url" onChange={this.onChangeUrl} />
          <input value={this.state.depth} placeholder="input depth" onChange={this.onChangeDepth} />
          <DataFetch url={this.state.url} depth={this.state.depth} />
      </div>
    )
  }
}

export default App
