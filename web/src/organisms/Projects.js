/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { t } = this.props
    return (
      <div id="projects" className="background-alt">
        <h2 className="heading">{t('project.title')}</h2>
        <div className="container">
          <div className="row">
            {t('project.projects', { returnObjects: true }).map(e => {
              return (
                <div className="project shadow-large">
                  <div className="project-image">
                    <img src={e.img} alt={'yabai'}/>
                  </div>
                  <div className="project-info">
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                    {/*<button>View More</button>*/}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default withNamespaces('translation')(Projects)
