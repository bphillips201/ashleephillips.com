import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"

import styles from "../styles/modules/post.module.scss"
import SEO from "../components/seo"
import Wrapper from "../components/Wrapper/Wrapper"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
  const companyLogoFluid =
    markdownRemark.frontmatter.companyLogo.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={`${frontmatter.title} | Case Study`} />
      <Wrapper>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <div className={styles.featuredImage}>
              <Img fluid={featuredImgFluid} alt={frontmatter.company} />
            </div>

            <div className={styles.postMeta}>
              <div className={styles.subTitle}>
                Case Study &nbsp;|&nbsp; UX Writing
              </div>
              <h1 dangerouslySetInnerHTML={{ __html: frontmatter.title }} />

              <div className={styles.companyLogo}>
                <Img fluid={companyLogoFluid} />
              </div>
            </div>
          </div>

          <Wrapper noPadX noUpPad width="xthin">
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Wrapper>
        </div>
      </Wrapper>
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
