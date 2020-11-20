import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./layout.scss"

const Layout: React.FC = props => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header title={site.siteMetadata.title} />
      <main>{props.children}</main>
      <Footer title={site.siteMetadata.title} />
    </>
  )
}

export default Layout
