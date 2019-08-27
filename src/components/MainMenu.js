import React from "react"
import { Link } from "gatsby"

import styles from "../styles/modules/Header.module.scss"

function MainMenu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>

        <li>
          <a
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
