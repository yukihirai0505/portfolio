import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withNamespaces } from 'react-i18next'

const linkMenu = [
  'about',
  'experience',
  'education',
  'projects',
  'skills',
  'contact'
]

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHeaderActive: false
    }
  }

  closeMenu() {
    this.setState({ isHeaderActive: false })
  }

  render() {
    const { isHeaderActive } = this.state

    const { t, i18n } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
    return (
      <div>
        <div id="mobile-menu-open" className="shadow-large" onClick={() => {
          this.setState({ isHeaderActive: true })
        }}>
          <FontAwesomeIcon icon="bars"/>
        </div>
        <header className={isHeaderActive ? 'active' : ''}>
          <div id="mobile-menu-close" onClick={() => this.closeMenu()}>
            <span>Close</span> <FontAwesomeIcon icon="times"/>
          </div>
          <ul id="menu" className="shadow">
            {linkMenu.map(key => {
              return (<li onClick={() => {
                this.setState({ isHeaderActive: false })
              }}>
                <a href={`#${key}`}>{t(`header.menu.${key}`)}</a>
              </li>)
            })}
            {i18n.language === 'en' ?
              <li onClick={() => changeLanguage('ja')}><button>日本語</button></li> :
              <li onClick={() => changeLanguage('en')}><button>English</button></li>
            }
          </ul>
        </header>
      </div>
    )
  }
}

export default withNamespaces('translation')(Header)
