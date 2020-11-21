import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import Wrapper from '../components/Wrapper/Wrapper'
import { TPageGlobals } from '../utils/constants'
import PostList from '../components/PostList/PostList'
import * as styles from '../styles/modules/page.module.scss'

const Work: React.FC<TPageGlobals> = props => {
  const caseStudies = props.data.allContentfulCaseStudy.edges.map(n => n.node)
  const articles = props.data.allContentfulArticle.edges.map(n => n.node)

  return (
    <Layout className={styles.page}>
      <SEO
        title="Work"
        description="I’m a content designer with a passion for digital accessibility."
      />
      <Wrapper width="thin">
        <h2>
          I’m a content designer with a passion for digital accessibility.
        </h2>
      </Wrapper>

      <Wrapper>
        <PostList data={caseStudies} />
      </Wrapper>

      <Wrapper width="thin">
        <h2>I’m a journalist and storyteller.</h2>
      </Wrapper>

      <Wrapper>
        <PostList data={articles} />
      </Wrapper>
    </Layout>
  )
}

export default Work

export const workQuery = graphql`
  query {
    allContentfulCaseStudy(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          fields {
            path
          }
          title
          workType
          featuredImage {
            description
            fluid(
              quality: 100
              maxWidth: 640
              maxHeight: 480
              cropFocus: CENTER
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulArticle(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          fields {
            path
          }
          title
          publication {
            name
          }
          featuredImage {
            description
            fluid(
              quality: 100
              maxWidth: 640
              maxHeight: 480
              cropFocus: CENTER
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
