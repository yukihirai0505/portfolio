/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'
import { nl2br } from '../utils/nl2br'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { t } = this.props
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading">{t('about.title')}</h2>
            </div>
            <div className="col-md-8">
              <p>
                {nl2br(t('about.content'))}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withNamespaces('translation')(About)
