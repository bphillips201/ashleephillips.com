import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoIcon from "../images/logo.svg"

import styles from "../styles/modules/Header.module.scss"
import Menu from "./Menu"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1>
      <Link to="/">
        <LogoIcon />
      </Link>
    </h1>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
