/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="projects" className="background-alt">
        <h2 className="heading">Projects</h2>
        <div className="container">
          <div className="row">
            <div className="project shadow-large">
              <div className="project-image">
                <img
                  src="https://yabaiwebyasan.com/wp-content/uploads/2018/10/parawan.jpg"
                  alt={'yabai'}
                />
              </div>
              <div className="project-info">
                <h3>ほにゃ</h3>
                <p>ほにゃほにゃ</p>
                <button>にゃん</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
