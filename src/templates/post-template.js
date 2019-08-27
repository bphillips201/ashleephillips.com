import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div className="wrapper">
        <div className="post">
          <Img fluid={featuredImgFluid} />
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
