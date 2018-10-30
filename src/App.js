import React, { Component } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './organisms/Footer'
import Contact from './organisms/Contact'
import Skills from './organisms/Skills'
import Projects from './organisms/Projects'
import Education from './organisms/Education'
import Experience from './organisms/Experience'
import About from './organisms/About'
import Lead from './organisms/Lead'
import Header from './organisms/Header'

class App extends Component {
  render() {
    return (
      <div>
        <div id="mobile-menu-open" className="shadow-large">
          <FontAwesomeIcon icon="bars"/>
        </div>
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

export default App
