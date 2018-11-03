/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { withNamespaces } from 'react-i18next'

library.add(faMapMarker)

class Experience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { t } = this.props
    return (
      <div id="experience" className="background-alt">
        <h2 className="heading">{t("experience.title")}</h2>
        <div id="experience-timeline">
          {t('experience.companies', { returnObjects: true }).map((experience, key) => {
            return (
              <div key={key} className="vtimeline-point">
                <div className="vtimeline-icon">
                  <FontAwesomeIcon icon="map-marker" />
                </div>
                <div className="vtimeline-block">
                  <span className="vtimeline-date">{experience.term}</span>
                  <div data-date={experience.term} className="vtimeline-content">
                    <h3>{experience.name}</h3>
                    <h4>{experience.job}</h4>
                    <p>{experience.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default withNamespaces('translation')(Experience)
