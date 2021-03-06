import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout/Layout'
import * as styles from '../styles/modules/post.module.scss'
import SEO from '../components/SEO/SEO'
import Wrapper from '../components/Wrapper/Wrapper'
import { TPageGlobals } from '../utils/constants'

const CaseStudy: React.FC<TPageGlobals> = props => {
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
      <SEO
        title={`${title} | Case Study`}
        image={featuredImage.localFile.publicURL}
      />
      <Wrapper>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <div className={styles.featuredImage}>
              <Img fluid={featuredImage.fluid} />
            </div>

            <div className={styles.postMeta}>
              <div className={styles.subTitle}>{workType} / Content Design</div>
              <h1>{title}</h1>

              <h2
                className={styles.companyLogo}
                title={`Content Design work for ${company.name}`}
              >
                <Img fluid={company.companyLogo.fluid} alt={company.name} />
              </h2>
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
            {workSamples.map(img => (
              <a
                className={styles.workSample}
                key={img.id}
                href={img.localFile.publicURL}
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
        localFile {
          publicURL
        }
      }
      featuredImage {
        fluid(quality: 90, maxWidth: 800) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        localFile {
          publicURL
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
