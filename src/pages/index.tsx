import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import PostList from '../components/PostList/PostList'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import Hero from '../components/Hero/Hero'
import Wrapper from '../components/Wrapper/Wrapper'
import { TPageGlobals } from '../utils/constants'
import PublicationList from '../components/PublicationList/PublicationList'

const IndexPage: React.FC<TPageGlobals> = props => {
  const { allContentfulCaseStudy, allContentfulPublication } = props.data
  const posts = allContentfulCaseStudy.edges.map(n => n.node)
  const publications = allContentfulPublication.edges.map(n => n.node)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Wrapper tall>
        <SectionHeader>Featured Work</SectionHeader>
        <PostList data={posts} />
      </Wrapper>
      <Wrapper tall tinted>
        <SectionHeader>Published In</SectionHeader>
        <PublicationList publications={publications} />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query {
    allContentfulCaseStudy(
      limit: 3
      filter: { isFeatured: { eq: true } }
      sort: { fields: publishDate, order: DESC }
    ) {
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
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulPublication(sort: { fields: name, order: ASC }) {
      edges {
        node {
          id
          name
          publicationWebsite
          publicationLogo {
            description
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
