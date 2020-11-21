import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import * as styles from "../styles/modules/post.module.scss"
import SEO from "../components/seo"
import Wrapper from "../components/Wrapper/Wrapper"
import { TPageGlobals } from "../utils/constants"

const CaseStudy: React.FC<TPageGlobals> = (props) => {
  const {
    title,
    workType,
    featuredImage,
    company,
    content,
    workSamples,
  } = props.data.contentfulCaseStudy

  return (
    <Layout>
      <SEO title={`${title} | Case Study`} />
      <Wrapper>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <div className={styles.featuredImage}>
              <Img fluid={featuredImage.fluid} />
            </div>

            <div className={styles.postMeta}>
              <div className={styles.subTitle}>{workType}</div>
              <h1>{title}</h1>

              <div className={styles.companyLogo}>
                <Img fluid={company.companyLogo.fluid} />
              </div>
            </div>
          </div>

          <Wrapper noPadX noUpPad width="xthin">
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
          </Wrapper>

          <Wrapper noPadY noPadX width="xthin">
            {workSamples.map((img) => (
              <a
                className={styles.workSample}
                key={img.id}
                href={`https://${img.file.url}`}
                target="_blank"
              >
                <Img fluid={img.fluid} alt={img.description} />
              </a>
            ))}
            <small className={styles.sampleExpand}>Click to expand</small>
          </Wrapper>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default CaseStudy

export const caseStudyQuery = graphql`
  query($id: String!) {
    contentfulCaseStudy(id: { eq: $id }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      workType
      workSamples {
        id
        description
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        file {
          url
        }
      }
      featuredImage {
        fluid(quality: 90, maxWidth: 800) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      company {
        name
        companyLogo {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
