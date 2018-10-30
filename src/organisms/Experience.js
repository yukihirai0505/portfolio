import React, { Component } from 'react'

class Experience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div id="experience-timeline">
          <div data-date="September 2015 – September 2016">
            <h3>Employer Name</h3>
            <h4>Job Title</h4>
            <p>Hoge</p>
          </div>

          <div data-date="September 2015 – September 2016">
            <h3>Employer Name</h3>
            <h4>Job Title</h4>
            <p>Hoge</p>
          </div>

          <div data-date="September 2015 – September 2016">
            <h3>Employer Name</h3>
            <h4>Job Title</h4>
            <p>Hoge</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
