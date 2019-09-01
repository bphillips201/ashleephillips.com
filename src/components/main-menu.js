import React from "react"
import { Link } from "gatsby"

import styles from "../styles/modules/header.module.scss"

function MainMenu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link title="About" to="/about" activeClassName="active">
            About
          </Link>
        </li>

        <li>
          <Link title="Work" to="/work" activeClassName="active">
            Work
          </Link>
        </li>

        <li>
          <a
            title="Read my blog on Medium"
            href="https://medium.com/@ashleeletters"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu
