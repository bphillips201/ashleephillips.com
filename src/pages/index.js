import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"
import styles from "../styles/modules/home.module.scss"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import {
  CoyoteOakLogo,
  EdibleSLOLogo,
  WeddingStandardLogo,
} from "../components/image"
import Hero from "../components/Hero/Hero"

function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const caseStudies = edges.filter(e => {
    return e.node.frontmatter.type === "Case Study"
  })

  return (
    <Layout>
      <SEO title="Home" keywords={[`ux writer`, `accessibility`, `speaker`]} />

      <Hero />

      <section className={`${styles.featuredPosts} chunk-large`}>
        <SectionHeader>Featured Work</SectionHeader>

        <div className="wrapper">
          <PostList postData={caseStudies} />
        </div>
      </section>

      <section className={`${styles.publishedIn} chunk-shaded chunk-large`}>
        <SectionHeader>Published In</SectionHeader>

        <div className={`${styles.logoContainer} wrapper`}>
          <a
            href="http://www.coyoteandoak.com/purchase"
            target="_blank"
            rel="noopener noreferrer"
            title="Coyote + Oak Magazine"
          >
            <CoyoteOakLogo />
          </a>
          <a
            href="http://ediblesanluisobispo.ediblecommunities.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Edible SLO Magazine"
          >
            <EdibleSLOLogo />
          </a>
          <a
            href="https://www.theweddingstandard.com/magazine/"
            target="_blank"
            rel="noopener noreferrer"
            title="The Wedding Standard Magazine"
          >
            <WeddingStandardLogo />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
