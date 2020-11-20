import React, { AllHTMLAttributes } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import * as styles from "./LinkButton.module.scss"

type TLinkButtonProps = AllHTMLAttributes<HTMLElement> & {
  to: string
  title?: string
  template: "primary" | "secondary"
}

const LinkButton: React.FC<TLinkButtonProps> = props => {
  const { to, title = "", template, className = "", children, ...rest } = props
  const linkButtonClasses = classnames({
    [styles.linkButton]: true,
    [styles[template]]: true,
    [className]: className,
  })
  const isExternal = to.includes("http")

  return (
    <>
      {isExternal ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={linkButtonClasses}
          title={title}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <Link to={to} className={linkButtonClasses} title={title} {...rest}>
          {children}
        </Link>
      )}
    </>
  )
}

export default LinkButton
