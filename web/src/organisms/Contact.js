/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import { strToAnimationStyle } from '../utils/animation'
import { withNamespaces } from 'react-i18next'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFinishContact: false
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    await fetch(
      'https://script.google.com/macros/s/AKfycbzGCVSo2E6CuMFS4SpTal0p30hNwY2kXFSCFITRpyEqRj7pCzo/exec',
      {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${ReactDOM.findDOMNode(this.refs.email).value}&message=${encodeURI(
          ReactDOM.findDOMNode(this.refs.message).value
        )}`
      }
    )
    this.setState({ isFinishContact: true })
  }

  render() {
    const { t } = this.props
    const { isFinishContact } = this.state
    return (
      <div id="contact">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfaNr34GNMOAsn7dFpaodtTBv4FFqw42xthGWhx8TXoMOviOg/viewform?embedded=true"
          width="640"
          height="673"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    )
  }
}

export default withNamespaces('translation')(Contact)
