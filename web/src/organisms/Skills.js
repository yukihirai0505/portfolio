/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react'
import { skills } from '../consts/skills'
import { withNamespaces } from 'react-i18next'

class Skills extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { t } = this.props
    return (
      <div id="skills">
        <h2 className="heading">{t(`skill.title`)}</h2>
        {Object.keys(skills).map((skill, key) => {
          return (
            <Fragment key={key}>
              <h3>{t(`skill.stacks.${skill}`)}</h3>
              <ul>
                {skills[skill].map((e, _key) => (
                  <li key={_key}>{e}</li>
                ))}
              </ul>
            </Fragment>
          )
        })}
      </div>
    )
  }
}

export default withNamespaces('translation')(Skills)
