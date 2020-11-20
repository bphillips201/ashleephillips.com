import React, { AllHTMLAttributes, ReactNode } from "react"
import classnames from "classnames"
import * as styles from "./SectionHeader.module.scss"

type TSectionHeaderProps = AllHTMLAttributes<HTMLElement> & {
  as?: ReactNode
}

const SectionHeader: React.FC<TSectionHeaderProps> = props => {
  const { as = "h3", children, className = "", ...rest } = props
  const Component: any = as
  const sectionHeaderClasses = classnames({
    [styles.sectionHeader]: true,
    [className]: className,
  })

  return (
    <Component className={sectionHeaderClasses} {...rest}>
      {children}
    </Component>
  )
}

export default SectionHeader
