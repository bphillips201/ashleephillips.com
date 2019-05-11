import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "../styles/modules/Button.module.scss"

const templates = {
  primary: "primary",
  default: "default",
}

const LinkButton = ({ buttonText, linkTo, template }) => {
  return (
    <Link to={linkTo} className={`${styles.button} ${template}`}>
      <span dangerouslySetInnerHTML={{ __html: buttonText }} />
    </Link>
  )
}

LinkButton.templates = templates

LinkButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  template: PropTypes.oneOf(Object.keys(templates)),
}

LinkButton.defaultProps = {
  buttonText: ``,
  linkTo: `/`,
  template: `default`,
}

export default LinkButton
