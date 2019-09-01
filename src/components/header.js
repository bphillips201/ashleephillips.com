import { Link } from "gatsby"
import React from "react"
import LogoIcon from "../images/logo-dark.svg"

import styles from "../styles/modules/header.module.scss"
import MainMenu from "./main-menu"

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">
          <LogoIcon />
        </Link>
      </h1>
      <MainMenu />
    </header>
  )
}

export default Header
