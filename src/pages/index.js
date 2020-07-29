import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/banner-image"
import PostList from "../components/post-list"

import styles from "../styles/modules/home.module.scss"
import { button } from "../styles/modules/button.module.scss"
import LinkButton from "../components/link-button"
import SectionHeader from "../components/section-header"
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
          <LinkButton
            title="View my work"
            to="/work"
            template="primary"
            text="View my work"
          />
          <a
            title="Read my blog on Medium"
            className={button}
            href="https://medium.com/@ashleeletters"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read my Blog
          </a>
        </div>

        <BannerImage className={styles.banner} />
      </section>

      <section className={`${styles.featuredPosts} chunk-large`}>
        <SectionHeader>
          <h3>Featured Work</h3>
        </SectionHeader>

        <div className="wrapper">
          <PostList postData={caseStudies} />
        </div>
      </section>

      <section className={`${styles.publishedIn} chunk-shaded chunk-large`}>
        <SectionHeader>
          <h3>Published In</h3>
        </SectionHeader>

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
