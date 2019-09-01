import React from "react"
import PropTypes from "prop-types"

import { sectionHeader } from "../styles/modules/typography.module.scss"

const SectionHeader = ({ children }) => {
  return <div className={sectionHeader}>{children}</div>
}

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionHeader
