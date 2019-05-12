import React from "react"
import PropTypes from "prop-types"

import { sectionHeader } from "../styles/modules/Typography.module.scss"

const headerTypes = {
  H1: "h1",
  H3: "h3",
}

const SectionHeader = ({ text, headerType }) => {
  return (
    <div>
      {headerType === headerTypes.H1 ? (
        <h1 className={sectionHeader}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </h1>
      ) : (
        <h3 className={sectionHeader}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </h3>
      )}
    </div>
  )
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
  headerType: PropTypes.oneOf(Object.keys(headerTypes)),
}

SectionHeader.defaultProps = {
  text: ``,
  headerType: `h3`,
}

export default SectionHeader
