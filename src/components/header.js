import { Link } from "gatsby"
import React from "react"
import LogoIcon from "../images/logo-dark.svg"

import styles from "../styles/modules/header.module.scss"
import MainMenu from "./main-menu"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link title="Ashlee Phillips" to="/">
          <LogoIcon />
        </Link>
      </div>
      <MainMenu />
    </header>
  )
}

export default Header
