/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react'
import { withNamespaces } from 'react-i18next'

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
                {t('about.content')
                  .split('\n')
                  .map((item, key) => (
                    <Fragment key={key}>
                      {item}
                      <br />
                    </Fragment>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withNamespaces('translation')(About)
