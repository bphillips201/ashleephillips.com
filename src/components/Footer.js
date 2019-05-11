import { Link } from "gatsby"
import React from "react"
import LogoIcon from "../images/logo-light.svg"

import styles from "../styles/modules/Footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <Link to="/">
          <LogoIcon />
        </Link>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Ashlee Phillilps
        </div>
      </div>
    </footer>
  )
}

export default Footer
