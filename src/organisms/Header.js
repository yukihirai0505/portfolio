import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <ul id="menu" className="shadow" onClick={() => {
            this.setState({ isHeaderActive: false })
          }}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}

export default Header
