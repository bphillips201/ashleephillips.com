import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "../styles/modules/button.module.scss"

const templates = {
  primary: "primary",
  default: "default",
}

const LinkButton = ({ title, text, to, template, className }) => {
  return (
    <Link to={to} className={`${className} ${styles.button} ${template}`}>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </Link>
  )
}

LinkButton.templates = templates

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  title: PropTypes.string,
  template: PropTypes.oneOf(Object.keys(templates)),
  className: PropTypes.string,
}

LinkButton.defaultProps = {
  text: ``,
  to: `/`,
  template: `default`,
  className: ``,
  title: ``,
}

export default LinkButton
