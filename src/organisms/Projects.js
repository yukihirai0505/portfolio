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
                <img src="images/project.jpg" />
              </div>
              {/* End .project-image */}
              <div className="project-info">
                <h3>Project Name Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.
                  Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet
                  vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
                <a href="#">View Project</a>
              </div>
              {/* End .project-info */}
            </div>
            {/* End .project */}

            <div className="project shadow-large">
              <div className="project-image">
                <img src="images/project.jpg" />
              </div>
              {/* End .project-image */}
              <div className="project-info">
                <h3>Project Name Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.
                  Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet
                  vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
                <a href="#">View Project</a>
              </div>
              {/* End .project-info */}
            </div>
            {/* End .project */}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
