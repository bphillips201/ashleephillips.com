import { Link } from "gatsby"
import React from "react"
import LogoIcon from "../images/logo-dark.svg"

import styles from "../styles/modules/footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <Link title="Ashlee Phillips" to="/">
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
