import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import styles from "../styles/modules/post.module.scss"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={`${frontmatter.title}`} />
      <section>
        <div className={`${styles.magazine} ${styles.post}`}>
          <div className={styles.magazineFeaturedImage}>
            <Img fluid={featuredImgFluid} alt={frontmatter.company} />
          </div>
          <center>
            <small>Photos by {frontmatter.photoCredit}</small>
          </center>
          <div className={`${styles.magazineHeader} wrapper`}>
            <div className={styles.postMeta}>
              <div className={styles.subTitle}>
                {frontmatter.company} &nbsp;|&nbsp; {frontmatter.date}
              </div>
              <h1 dangerouslySetInnerHTML={{ __html: frontmatter.title }} />
              <h2 dangerouslySetInnerHTML={{ __html: frontmatter.subTitle }} />
            </div>
          </div>

          <div className="wrapper wrapper-small">
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        path
        title
        subTitle
        photoCredit
        company
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
