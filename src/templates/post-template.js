import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"

import styles from "../styles/modules/Post.module.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.post}>
          <Img fluid={featuredImgFluid} />
          <div className="wrapper wrapper-thin">
            <h1>{frontmatter.title}</h1>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        company
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
