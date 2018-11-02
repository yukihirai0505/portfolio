/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class Education extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="education">
        <h2 className="heading">Education</h2>
        <div className="education-block">
          <h3>University of HOSEI</h3>
          <span className="education-date">Apr 2009 - Mar 2013</span>
          <h4>Bachelor of Laws</h4>
          <p>:)</p>
        </div>

        <div className="education-block">
          <h3>Nexseed</h3>
          <span className="education-date">Oct 2014 - Mar 2015</span>
          <h4>English & Programming School</h4>
          <p>
            I leaned how to use Objective-C to make iOS applications and also CakePHP to make WEB
            applications.
          </p>
        </div>
      </div>
    )
  }
}

export default Education
