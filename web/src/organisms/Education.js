/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'

class Education extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { t } = this.props
    return (
      <div id="education">
        <h2 className="heading">{t("education.title")}</h2>
        {t('education.schools', { returnObjects: true }).map(e => {
          return (
            <div className="education-block">
              <h3>{e.name}</h3>
              <span className="education-date">{e.term}</span>
              <h4>{e.degree}</h4>
              <p>{e.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default withNamespaces('translation')(Education)
