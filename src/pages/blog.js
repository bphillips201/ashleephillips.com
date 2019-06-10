import React from "react"
import { StaticQuery } from "gatsby"

import SectionHeader from "../components/SectionHeader"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostList from "../components/PostList"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <section className="shaded-section">
      <SectionHeader>
        <h1>Blog</h1>
      </SectionHeader>
    </section>

    <section className="wrapper">
      <StaticQuery
        query={graphql`
          query allPosts {
            allWordpressPost {
              edges {
                node {
                  id
                  title
                  path
                  featured_media {
                    id
                    alt_text
                    localFile {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                  categories {
                    id
                    name
                  }
                }
              }
            }
          }
        `}
        render={data => <PostList postData={data.allWordpressPost.edges} />}
      />
    </section>
  </Layout>
)

export default Blog
