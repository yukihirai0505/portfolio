import React, { Component } from 'react'
import { skills } from '../consts/skills'

class Skills extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="skills">
        <h2 className="heading">Programming Language</h2>
        <ul>
          {skills.programming.map(e => <li>{e}</li>)}
        </ul>
        <h2 className="heading">Database</h2>
        <ul>
          {skills.database.map(e => <li>{e}</li>)}
        </ul>
        <h2 className="heading">Operating System</h2>
        <ul>
          {skills.operating.map(e => <li>{e}</li>)}
        </ul>
        <h2 className="heading">Web Technologies</h2>
        <ul>
          {skills.web.map(e => <li>{e}</li>)}
        </ul>
        <h2 className="heading">Editor/IDE</h2>
        <ul>
          {skills.editor.map(e => <li>{e}</li>)}
        </ul>
        <h2 className="heading">Others</h2>
        <ul>
          {skills.others.map(e => <li>{e}</li>)}
        </ul>
      </div>
    )
  }
}

export default Skills
