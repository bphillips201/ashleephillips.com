import React from "react"
import { sectionHeader } from "../styles/modules/Typography.module.scss"

const SectionHeader = ({ text }) => {
  return (
    <h3 className={sectionHeader}>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </h3>
  )
}

export default SectionHeader
