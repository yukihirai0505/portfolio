import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Lead extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <div id="lead">
        <div id="lead-content">
          <h1>Yuki Hirai</h1>
          <h2>Software Engineer</h2>
          <a href="#" className="btn-rounded-white">
            Download Resume
          </a>
        </div>
        {/* End #lead-content */}

        <div id="lead-overlay"/>

        <div id="lead-down">
            <span>
              <FontAwesomeIcon icon="chevron-down"/>
            </span>
        </div>
        {/* End #lead-down */}
      </div>
    )
  }
}

export default Lead
