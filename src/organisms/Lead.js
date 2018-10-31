import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Lead extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="lead">
        <div id="lead-content">
          <h1 className="animate seven">
            <span>Y</span><span>u</span><span>k</span><span>i</span> &nbsp;
            <span>H</span><span>i</span><span>r</span><span>a</span><span>i</span>
          </h1>
          <h2 className="animate six">
            <span>S</span><span>o</span><span>f</span><span>t</span><span>w</span><span>a</span><span>r</span><span>e</span> &nbsp;
            <span>E</span><span>n</span><span>g</span><span>n</span><span>e</span><span>e</span><span>r</span>
          </h2>
          <div className="mission">
            <ul>
              <li>世界中の人に愛されるサービスをつくる</li>
              <li>世の中に大きいインパクト与える</li>
              <li>後世に語り継がれる勇姿を残す</li>
              <li>チャレンジしまくる</li>
              <li>思いついたら即つくる</li>
            </ul>
          </div>
          {/*
          <a href="#" className="btn-rounded-white">
            Download Resume
          </a>
          */}
        </div>
        {/* End #lead-content */}

        <div id="lead-overlay"/>

        <div id="lead-down" onClick={() => {
          Scroll.animateScroll.scrollToBottom()
        }}>
          <span>
            <FontAwesomeIcon icon="chevron-down"/>
          </span>
        </div>
        {/* End #lead-down */}
      </div>
    )
  }
}

export default Lead
