import React, { Component } from 'react'
import { experiences } from '../consts/experiences'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarker)


class Experience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div id="experience-timeline">
          {experiences.map(experience => {
            return (<div className="vtimeline-point">
              <div className="vtimeline-icon"><FontAwesomeIcon icon="map-marker"/></div>
              <div className="vtimeline-block"><span className="vtimeline-date">{experience.term}</span>
                <div data-date={experience.term} className="vtimeline-content">
                  <h3>{experience.company}</h3>
                  <h4>{experience.job}</h4>
                  <p>
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default Experience
