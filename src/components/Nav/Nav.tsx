import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as styles from './Nav.module.scss'

const Nav: React.FC = () => {
  const isCurrent = (path: string) => {
    return location ? location.pathname === path : false
  }
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            path
          }
        }
      }
    }
  `)

  return (
    <nav className={styles.nav}>
      <ul>
        {site.siteMetadata.menuLinks.map(
          (link: { name: string; path: string }) => (
            <li key={link.path}>
              <Link
                title={link.name}
                to={link.path}
                activeClassName={styles.active}
              >
                {isCurrent(link.path) ? <h1>{link.name}</h1> : <>{link.name}</>}
              </Link>
            </li>
          )
        )}

        <li>
          <a
            title="Read my blog on Medium"
            href="https://medium.com/@ashleeletters"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
