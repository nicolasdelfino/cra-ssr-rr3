import React from 'react'
import { Link } from 'react-router'

export default class Error extends React.Component {
  render() {
    return (
      <p className="App-intro">
        <Link to="/home">404, here´s home</Link>
      </p>
    )
  }
}