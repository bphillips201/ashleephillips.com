import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import PostList from "../components/post-list"
import styles from "../styles/modules/home.module.scss"
import LinkButton from "../components/LinkButton/LinkButton"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import {
  CoyoteOakLogo,
  EdibleSLOLogo,
  WeddingStandardLogo,
} from "../components/image"

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

      <section className={`${styles.hero} wrapper`}>
        <div className={styles.cta}>
          <h1>Hi, my dudes</h1>
          <p>
            I’m a content strategist living on the California central coast. I
            speak about digital accessbility and geek out over calligraphy and
            Bob’s Burgers.
          </p>
          <LinkButton to="/work" title="View my work" template="primary">View my work</LinkButton>
          <LinkButton to="https://medium.com/@ashleeletters" title="Read my blog on Medium" template="secondary">Read my Blog</LinkButton>
        </div>

        <BannerImage className={styles.banner} />
      </section>

      <section className={`${styles.featuredPosts} chunk-large`}>
        <SectionHeader as="h3">Featured Work</SectionHeader>

        <div className="wrapper">
          <PostList postData={caseStudies} />
        </div>
      </section>

      <section className={`${styles.publishedIn} chunk-shaded chunk-large`}>
        <SectionHeader as="h3">Published In</SectionHeader>

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
