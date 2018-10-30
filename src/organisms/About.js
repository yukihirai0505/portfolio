import React, { Component } from 'react'

class About extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading">About Me</h2>
            </div>
            <div className="col-md-8">
              <p>
                Yuki Hirai
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
