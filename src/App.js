import React, { Component } from 'react'
import ReactRevealText from 'react-reveal-text'
import './App.css'

class App extends Component {
  state = { show: false, showHeart: false, showImage: false }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    }, 1000)
    setTimeout(() => {
      this.setState({ showHeart: true })
    }, 3000)
    setTimeout(() => {
      this.setState({ showImage: true })
    }, 5000)
  }
  render() {
    return (
      <div className={`App ${this.state.showImage}`}>
        <div
          className={`bg-image ${this.state.showImage}`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/us.jpg)` }}
        />
        <ReactRevealText
          show={this.state.show}
          className={`reveal ${this.state.showImage}`}
        >
          Merry&nbsp;Christmas&nbsp;Laura
        </ReactRevealText>
        <div className={`reveal-heart ${this.state.showHeart}`}>💜🎄⭐️</div>
      </div>
    )
  }
}

export default App
