import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"
import styles from "../styles/modules/home.module.scss"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import Hero from "../components/Hero/Hero"
import Wrapper from "../components/Wrapper/Wrapper"

const IndexPage: React.FC = props => {
  const {
    coyoteOak,
    weddingStandard,
    edibleSLO,
    allMarkdownRemark,
  } = props.data
  const caseStudies = allMarkdownRemark.edges.filter(e => {
    return e.node.frontmatter.type === "Case Study"
  })

  return (
    <Layout>
      <SEO title="Home" keywords={[`ux writer`, `accessibility`, `speaker`]} />

      <Hero />

      <Wrapper size="tall">
        <SectionHeader>Featured Work</SectionHeader>
        <PostList postData={caseStudies} />
      </Wrapper>

      <Wrapper size="tall" isTinted={true}>
        <SectionHeader>Published In</SectionHeader>

        <div className={styles.logoContainer}>
          <a
            href="http://www.coyoteandoak.com/purchase"
            target="_blank"
            rel="noopener noreferrer"
            title="Coyote + Oak Magazine"
          >
            <Img fluid={coyoteOak.childImageSharp.fluid} />
          </a>
          <a
            href="http://ediblesanluisobispo.ediblecommunities.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Edible SLO Magazine"
          >
            <Img fluid={edibleSLO.childImageSharp.fluid} />
          </a>
          <a
            href="https://www.theweddingstandard.com/magazine/"
            target="_blank"
            rel="noopener noreferrer"
            title="The Wedding Standard Magazine"
          >
            <Img fluid={weddingStandard.childImageSharp.fluid} />
          </a>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            type
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    coyoteOak: file(relativePath: { eq: "publications/coyote-oak.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    weddingStandard: file(
      relativePath: { eq: "publications/wedding-standard.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    edibleSLO: file(relativePath: { eq: "publications/edible-slo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
