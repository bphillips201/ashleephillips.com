import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import Wrapper from "../components/Wrapper/Wrapper"
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
      <article>
        <div className={`${styles.magazine} ${styles.post}`}>
          <div className={styles.magazineFeaturedImage}>
            <Img fluid={featuredImgFluid} alt={frontmatter.company} />
          </div>
          <center>
            <small>Photos by {frontmatter.photoCredit}</small>
          </center>
          <Wrapper noUpPad className={styles.magazineHeader}>
            <div className={styles.postMeta}>
              <div className={styles.subTitle}>
                {frontmatter.company} &nbsp;|&nbsp; {frontmatter.date}
              </div>
              <h1 dangerouslySetInnerHTML={{ __html: frontmatter.title }} />
              <h2 dangerouslySetInnerHTML={{ __html: frontmatter.subTitle }} />
            </div>
          </Wrapper>

          <Wrapper width="xthin" noUpPad>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Wrapper>
        </div>
      </article>
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
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
