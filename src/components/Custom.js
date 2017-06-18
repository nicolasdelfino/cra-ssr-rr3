import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component {
  render() {
    return (
      <p className="App-intro">
        Custom thingy
        <br/>
        <Link to="/">home</Link>
      </p>
    )
  }
}
