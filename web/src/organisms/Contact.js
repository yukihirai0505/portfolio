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
        <h2>{t('contact.title')}</h2>
        <div id="contact-form">
          {isFinishContact ? (
            <h2 className="animate seven">
              {strToAnimationStyle(t('contact.thanks'))}
            </h2>
          ) : (
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type="email" ref="email" placeholder={t('contact.email')} required/>
              <textarea name="message" ref="message" placeholder={t('contact.message')} required/>
              <button type="submit">{t('contact.submit')}</button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default withNamespaces('translation')(Contact)
