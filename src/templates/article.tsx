import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout/Layout'
import Wrapper from '../components/Wrapper/Wrapper'
import * as styles from '../styles/modules/post.module.scss'
import SEO from '../components/SEO/SEO'
import { TPageGlobals } from '../utils/constants'

const Article: React.FC<TPageGlobals> = props => {
  const {
    title,
    subtitle,
    publication,
    photoCredit,
    publishDate,
    content,
    featuredImage,
  } = props.data.contentfulArticle

  return (
    <Layout>
      <SEO title={title} image={featuredImage.localFile.publicURL} />
      <article>
        <div className={styles.post}>
          <div className={styles.magazineFeaturedImage}>
            <Img fluid={featuredImage.fluid} alt={publication.name} />
          </div>
          <div className={styles.photoCredit}>Photo by {photoCredit}</div>
          <Wrapper noUpPad className={styles.magazineHeader}>
            <div className={styles.postMeta}>
              <div className={styles.subTitle}>
                {publication.name} / {publishDate}
              </div>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
          </Wrapper>

          <Wrapper width="xthin" noUpPad>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
          </Wrapper>
        </div>
      </article>
    </Layout>
  )
}

export default Article

export const articleQuery = graphql`
  query($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      subtitle
      publishDate(formatString: "MMMM YYYY")
      photoCredit
      publication {
        name
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        localFile {
          publicURL
        }
        fluid(quality: 80, maxWidth: 1200) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
