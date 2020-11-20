import React from "react"
import Nav from "../Nav/Nav"
import Logo from "../Logo/Logo"
import * as styles from "./header.module.scss"

const Header: React.FC<TSiteProps> = props => (
  <header className={styles.header}>
    <Logo title={props.title} />
    <Nav />
  </header>
)

export default Header
