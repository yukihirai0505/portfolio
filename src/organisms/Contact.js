import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <div id="contact">
        <h2>Get in Touch</h2>
        <div id="contact-form">
          <form method="POST" action="https://formspree.io/email@email.com">
            <input type="hidden" name="_subject" value="Contact request from personal website" />
            <input type="email" name="_replyto" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" required />
            <button type="submit">Send</button>
          </form>
        </div>
        {/* End #contact-form */}
      </div>
    )
  }
}

export default Contact
