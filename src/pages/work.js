import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"

import styles from "../styles/modules/page.module.scss"

function Work({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const caseStudies = edges.filter(e => {
    return e.node.frontmatter.type === "Case Study"
  })

  const magazineFeatures = edges.filter(e => {
    return e.node.frontmatter.type === "Magazine Feature"
  })

  return (
    <Layout>
      <SEO
        title="Work"
        description="I’m a content strategist with a passion for digital accessibility."
      />
      <section className={`${styles.page} chunk`}>
        <div className="wrapper wrapper-thin">
          <h1>
            I’m a content strategist with a passion for digital accessibility.
          </h1>
        </div>

        <div className="wrapper">
          <PostList postData={caseStudies} />
        </div>
      </section>

      <section className={`${styles.page} chunk`}>
        <div className="wrapper wrapper-thin">
          <h1>I’m a journalist and storyteller.</h1>
        </div>

        <div className="wrapper">
          <PostList postData={magazineFeatures} />
        </div>
      </section>
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
