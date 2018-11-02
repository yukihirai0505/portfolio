/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class TargetLink extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        {this.props.text}
      </a>
    )
  }
}

export default TargetLink
