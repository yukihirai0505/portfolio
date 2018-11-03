/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withNamespaces } from 'react-i18next'
import { strToAnimationStyle } from '../utils/animation'

class Lead extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { t } = this.props

    return (
      <div id="lead">
        <div id="lead-content">
          <h1 className="animate seven">{strToAnimationStyle('Yuki Hirai')}</h1>
          <h2 className="animate six">{strToAnimationStyle(t('lead.headline'))}</h2>
          <div className="mission">
            <ul>
              {t('lead.mission', { returnObjects: true }).map(e => (
                <li>{e}</li>
              ))}
            </ul>
          </div>
          {/*
          <a href="#" className="btn-rounded-white">
            Download Resume
          </a>
          */}
        </div>

        <div id="lead-overlay" />

        <div
          id="lead-down"
          onClick={() => {
            Scroll.animateScroll.scrollToBottom()
          }}
        >
          <span>
            <FontAwesomeIcon icon="chevron-down" />
          </span>
        </div>
      </div>
    )
  }
}

export default withNamespaces('translation')(Lead)
