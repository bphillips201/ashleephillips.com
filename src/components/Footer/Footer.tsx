import React from "react"
import * as styles from "./Footer.module.scss"
import Logo from "../Logo/Logo"

const Footer: React.FC<TSiteProps> = (props) => (
  <footer className={styles.footer}>
    <div className="wrapper">
      <Logo title={props.title} />
      <div className={styles.copyright}>
        © {new Date().getFullYear()} {props.title}
      </div>
    </div>
  </footer>
)

export default Footer
