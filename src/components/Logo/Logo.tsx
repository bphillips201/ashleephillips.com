import React from "react"
import { Link } from "gatsby"
import * as styles from "./Logo.module.scss"

type TLogoProps = TSiteProps & {
  darkMode?: boolean
}

const Logo: React.FC<TLogoProps> = props => {
  const color = props.darkMode ? "#fff" : "#3c3c3c"

  return (
    <Link className={styles.logo} title={props.title} to="/">
      <svg
        height="61"
        viewBox="0 0 42 61"
        width="42"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <path
            d="m16.6666666 40.6779661c-9.4590444-1.5955389-16.6666666-9.8667406-16.6666666-19.8305084s7.2076222-18.23496953 16.6666666-19.83050855zm6.6666668-39.66101695c9.4590443 1.59553902 16.6666666 9.86674075 16.6666666 19.83050855s-7.2076223 18.2349695-16.6666666 19.8305084z"
            stroke={color}
            strokeWidth="2"
          />
          <g fill={color} fillRule="nonzero">
            <path
              d="m24 0-2 .41818785v59.58181215h2z"
              transform="matrix(-1 0 0 1 46 0)"
            />
            <path d="m18 0-2 .4402214v48.3733379h2z" />
          </g>
        </g>
      </svg>
    </Link>
  )
}

export default Logo
