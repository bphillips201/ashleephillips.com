import React, { AllHTMLAttributes, ReactNode } from "react"
import classnames from "classnames"
import * as styles from "./Wrapper.module.scss"

type TWrapperProps = AllHTMLAttributes<HTMLElement> & {
  as?: ReactNode
  width?: "thin" | "xthin" | "default"
  size?: "tall" | "default"
  isTinted?: boolean
  noPadY?: boolean
  noPadX?: boolean
  noUpPad?: boolean
}

const Wrapper: React.FC<TWrapperProps> = (props) => {
  const {
    className = "",
    as = "section",
    isTinted = false,
    width = "default",
    size = "default",
    noPadY = false,
    noPadX = false,
    noUpPad = false,
    ...rest
  } = props
  const wrapperClasses = classnames({
    [styles.wrapper]: true,
    [styles[size]]: true,
    [styles.tinted]: isTinted,
    [styles.noPadY]: noPadY,
    [styles.noUpPad]: noUpPad,
  })
  const chunkClasses = classnames({
    [styles.chunk]: true,
    [styles[width]]: true,
    [styles.noPadX]: noPadX,
    [className]: className,
  })
  const Component: any = as

  return (
    <Component className={wrapperClasses}>
      <div className={chunkClasses} {...rest}>
        {props.children}
      </div>
    </Component>
  )
}

export default Wrapper
