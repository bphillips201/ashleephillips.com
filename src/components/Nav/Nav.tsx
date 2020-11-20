import React from "react"
import { Link } from "gatsby"
import * as styles from "./nav.module.scss"

const Nav: React.FC = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link title="About" to="/about" activeClassName={styles.active}>
          About
        </Link>
      </li>

      <li>
        <Link title="Work" to="/work" activeClassName={styles.active}>
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

export default Nav
