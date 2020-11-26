import * as React from "react"
import { useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub,faStackOverflow, faLinkedin, faReddit} from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/img/logo.svg";


export default () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false)

  return <header>
    <nav className="navbar main-nav" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img className="m-0" src={logo} width="32" height="32" alt=""/>
          <span className="is-uppercase ml-3 is-size-5">
          princebillyGK
          </span>
        </div>

        <a role="button" className={`navbar-burger burger${isNavbarActive ? " is-active" : ""}`} aria-label="menu"
           aria-expanded="false"
           data-target="navbarBasicExample" onClick={() => setIsNavbarActive((prev) => !prev)}>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu${isNavbarActive ? " is-active" : ""}`}>
        <div className="navbar-end">

          <a className="navbar-item">
            All Projects
          </a>

          <a className="navbar-item">
            Blogs
          </a>


          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Profiles
            </a>
            <div className="navbar-dropdown is-right">
            <a className="navbar-item" href="https://github.com/princebillygk" target="_blank">
              <FontAwesomeIcon className="mr-2" icon={faGithub} />
              Github
            </a>

            <a className="navbar-item" href="https://www.linkedin.com/in/princebillygk/" target="_blank">
              <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
              Linkedin
            </a>


            <a className="navbar-item" href="https://stackoverflow.com/users/8084731/princebillygk" target="_blank">
              <FontAwesomeIcon className="mr-2" icon={faStackOverflow} />
              Stack Overflow
            </a>

            <hr className="navbar-divider"/>

            <a className="navbar-item" href="https://www.reddit.com/user/-princebillyGK-/" target="_blank">
              <FontAwesomeIcon className="mr-2" icon={faReddit} />
              Reddit
            </a>
          </div>

          </div>
        </div>
      </div>
  </nav>
</header>
}

