/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="contact">
        <h2>Get in Touch</h2>
        <div id="contact-form">
          <form
            onSubmit={e => {
              e.preventDefault()
              fetch(
                'https://script.google.com/macros/s/AKfycbzGCVSo2E6CuMFS4SpTal0p30hNwY2kXFSCFITRpyEqRj7pCzo/exec',
                {
                  method: 'POST',
                  cache: 'no-cache',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: `email=${ReactDOM.findDOMNode(this.refs.email).value}&message=${
                    encodeURI(ReactDOM.findDOMNode(this.refs.message).value)
                  }`
                }
              ).then(function(response) {
                response.text().then(function(text) {
                  console.log('ok')
                })
              })
            }}
          >
            <input type="email" ref="email" placeholder="Your email" required />
            <textarea name="message" ref="message" placeholder="Your message" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
