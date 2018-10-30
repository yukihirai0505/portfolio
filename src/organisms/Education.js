import React, { Component } from 'react'

class Education extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <div id="education">
        <h2 className="heading">Education</h2>
        <div className="education-block">
          <h3>University of Hosei</h3>
          <span className="education-date">Sept 2016 - Sept 2017</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>
            Hoge
          </p>
        </div>
        {/* End .education-block */}

        <div className="education-block">
          <h3>University of Hoge</h3>
          <span className="education-date">Sept 2016 - Sept 2017</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <ul>
            <li>Hoge</li>
            <li>Hoge</li>
            <li>Hoge</li>
          </ul>
        </div>
        {/* End .education-block */}
      </div>
    )
  }
}

export default Education
