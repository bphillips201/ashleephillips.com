import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import styles from "../styles/modules/Post.module.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
  const companyLogoFluid =
    markdownRemark.frontmatter.companyLogo.childImageSharp.fluid
  return (
    <Layout>
      <section className="chunk">
        <div className={styles.post}>
          <div className={`${styles.postHeader} wrapper`}>
            <div className={styles.featuredImage}>
              <Img fluid={featuredImgFluid} alt={frontmatter.company} />
            </div>

            <div className={styles.postMeta}>
              <div className={styles.subTitle}>UX Writing Case Study</div>
              <h1 dangerouslySetInnerHTML={{ __html: frontmatter.title }} />

              <div className={styles.companyLogo}>
                <Img fluid={companyLogoFluid} />
              </div>
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
        companyLogo {
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
