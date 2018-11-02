/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import TargetLink from '../atoms/TargetLink'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faFacebook,
  faTwitter,
  faGooglePlus
} from '@fortawesome/free-brands-svg-icons'
import * as Scroll from 'react-scroll'

library.add(faChevronUp, faGithub, faStackOverflow, faLinkedin, faFacebook, faTwitter, faGooglePlus)

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 copyright">
              <p>Copyright &copy; 2018 Yuki Hirai</p>
            </div>
            <div className="col-sm-2 top">
              <span
                id="to-top"
                onClick={() => {
                  Scroll.animateScroll.scrollToTop()
                }}
              >
                <FontAwesomeIcon icon="chevron-up" />
              </span>
            </div>
            <div className="col-sm-5 social">
              <ul>
                <li>
                  <TargetLink
                    href={'https://github.com/yukihirai0505'}
                    text={<FontAwesomeIcon icon={['fab', 'github']} />}
                  />
                </li>
                <li>
                  <TargetLink
                    href={'https://stackoverflow.com/users/4691563/yabaiwebyasan'}
                    text={<FontAwesomeIcon icon={['fab', 'stack-overflow']} />}
                  />
                </li>
                <li>
                  <TargetLink
                    href={'https://linkedin.com/'}
                    text={<FontAwesomeIcon icon={['fab', 'linkedin']} />}
                  />
                </li>
                <li>
                  <TargetLink
                    href={'https://www.facebook.com/yukyhirai'}
                    text={<FontAwesomeIcon icon={['fab', 'facebook']} />}
                  />
                </li>
                <li>
                  <TargetLink
                    href={'https://twitter.com/statue_of_weben'}
                    text={<FontAwesomeIcon icon={['fab', 'twitter']} />}
                  />
                </li>
                <li>
                  <TargetLink
                    href={'https://plus.google.com/u/0/107176416612299978712'}
                    text={<FontAwesomeIcon icon={['fab', 'google-plus']} />}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
