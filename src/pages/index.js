import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/banner-image"
import PostList from "../components/post-list"

import styles from "../styles/modules/home.module.scss"
import LinkButton from "../components/link-button"
import SectionHeader from "../components/section-header"
import {
  CoyoteOakLogo,
  EdibleSLOLogo,
  WeddingStandardLogo,
} from "../components/image"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`ux writer`, `accessibility`, `speaker`]} />

      <section className={`${styles.hero} wrapper`}>
        <div className={styles.cta}>
          <h1>Hi, my dudes.</h1>
          <p>
            I’m a User Experience Writer living on the California central coast.
            I speak about web accessbility and geek out over calligraphy and
            Bob’s Burgers.
          </p>
          <LinkButton
            title="View my work"
            to="/work"
            template="primary"
            text="View my work"
          />
          <LinkButton title="About me" to="/about" text="Learn more" />
        </div>

        <BannerImage className={styles.banner} />
      </section>

      <section className={`${styles.featuredPosts} chunk-large`}>
        <SectionHeader>
          <h3>Featured Work</h3>
        </SectionHeader>

        <div className="wrapper">
          <PostList postData={edges} />
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 12)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            company
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
