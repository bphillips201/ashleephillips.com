import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import styles from "../styles/modules/page.module.scss"
import Wrapper from "../components/Wrapper/Wrapper"

function Work({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const caseStudies = edges.filter((e) => {
    return e.node.frontmatter.type === "Case Study"
  })

  const magazineFeatures = edges.filter((e) => {
    return e.node.frontmatter.type === "Magazine Feature"
  })

  return (
    <Layout className={styles.page}>
      <SEO
        title="Work"
        description="I’m a content strategist with a passion for digital accessibility."
      />
      <Wrapper width="thin">
        <h1>
          I’m a content strategist with a passion for digital accessibility.
        </h1>
      </Wrapper>

      <Wrapper noUpPad>{/* <PostList data={caseStudies} /> */}</Wrapper>

      <Wrapper width="thin">
        <h1>I’m a journalist and storyteller.</h1>
      </Wrapper>

      <Wrapper noUpPad>{/* <PostList data={magazineFeatures} /> */}</Wrapper>
    </Layout>
  )
}

export default Work

export const workQuery = graphql`
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
            type
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
  }
`
