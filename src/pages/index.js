import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BannerImage from "../components/BannerImage"
import PostList from "../components/PostList"

import styles from "../styles/modules/Home.module.scss"
import LinkButton from "../components/LinkButton"
import SectionHeader from "../components/SectionHeader"
import {
  CoyoteOakLogo,
  EdibleSLOLogo,
  WeddingStandardLogo,
} from "../components/Image"

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
          <LinkButton to="/work" template="primary" text="View my work" />
          <LinkButton to="/about" text="Learn more" />
        </div>

        <BannerImage className={styles.banner} />
      </section>

      <section className={`${styles.featuredPosts} wrapper`}>
        <SectionHeader>
          <h3>Featured Work</h3>
        </SectionHeader>

        <PostList postData={edges} />
      </section>

      <section className={styles.publishedIn}>
        <SectionHeader>
          <h3>Published In</h3>
        </SectionHeader>

        <div className={`${styles.logoContainer} wrapper wrapper-thin`}>
          <a
            href="http://www.coyoteandoak.com/purchase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CoyoteOakLogo />
          </a>
          <a
            href="http://ediblesanluisobispo.ediblecommunities.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EdibleSLOLogo />
          </a>
          <a
            href="https://www.theweddingstandard.com/magazine/"
            target="_blank"
            rel="noopener noreferrer"
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
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
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
