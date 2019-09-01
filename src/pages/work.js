import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostList from "../components/PostList"

import styles from "../styles/modules/Page.module.scss"

const Work = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Work" />
    <section className={`${styles.page} chunk`}>
      <div className="wrapper wrapper-thin">
        <h1>
          I’m a User Experience Writer with a passion for digital accessibility.
        </h1>
      </div>

      <div className="wrapper">
        <PostList postData={edges} />
      </div>
    </section>
  </Layout>
)

export default Work

export const portfolioQuery = graphql`
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