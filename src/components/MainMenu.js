import React from "react"
// import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "../styles/modules/Header.module.scss"

function MainMenu() {
  const { allWordpressWpApiMenusMenusItems } = useStaticQuery(
    graphql`
      query {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              items {
                object_id
                title
                object_slug
              }
            }
          }
        }
      }
    `
  )

  const { items } = allWordpressWpApiMenusMenusItems.edges[0].node

  return (
    <nav className={styles.nav}>
      <ul>
        {items.map(item => (
          <li key={item.object_id}>
            <Link to={item.object_slug} activeClassName="active">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
