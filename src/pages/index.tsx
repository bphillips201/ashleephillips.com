import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import PostList from "../components/PostList/PostList"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import Hero from "../components/Hero/Hero"
import Wrapper from "../components/Wrapper/Wrapper"

const IndexPage: React.FC = (props: any) => {
  const { allContentfulCaseStudy, allContentfulPublication } = props.data
  const posts = allContentfulCaseStudy.edges.map(n => n.node);

  return (
    <Layout>
      <SEO title="Home" keywords={[`ux writer`, `accessibility`, `speaker`]} />

      <Hero />

      <Wrapper>
        <SectionHeader>Featured Work</SectionHeader>
        <PostList data={posts} />
      </Wrapper>

      <Wrapper isTinted={true}>
        <SectionHeader>Published In</SectionHeader>

      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query {
    allContentfulCaseStudy(limit: 3, filter: {isFeatured: {eq: true}}, sort: {fields: publishDate, order: DESC}) {
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
    allContentfulPublication(sort: {fields: name, order: ASC}) {
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
