import React, { AllHTMLAttributes } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { className = '', ...rest } = props
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
      <main className={className} {...rest}>
        {props.children}
      </main>
      <Footer title={site.siteMetadata.title} />
    </>
  )
}

export default Layout
