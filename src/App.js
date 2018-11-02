import React, { Component } from 'react'
import './index.css'
import Footer from './organisms/Footer'
import Contact from './organisms/Contact'
import Skills from './organisms/Skills'
import Projects from './organisms/Projects'
import Education from './organisms/Education'
import Experience from './organisms/Experience'
import About from './organisms/About'
import Lead from './organisms/Lead'
import Header from './organisms/Header'
import { withNamespaces } from 'react-i18next'

class App extends Component {

  constructor() {
    super()
  }

  render() {
    const { t } = this.props
    return (
      <div>
        <Header/>
        <Lead/>
        <About/>
        <Experience/>
        <Education/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default withNamespaces('translation')(App)
