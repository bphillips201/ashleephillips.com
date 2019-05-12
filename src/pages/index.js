import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/Image"
import SEO from "../components/SEO"
import BannerImage from "../components/BannerImage"
import PostList from "../components/PostList"

import styles from "../styles/modules/Home.module.scss"
import LinkButton from "../components/LinkButton"
import SectionHeader from "../components/SectionHeader"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ux writer`, `accessibility`, `speaker`]} />

    <section className={`${styles.hero} wrapper`}>
      <div className={styles.cta}>
        <h1>Hi, my dudes.</h1>
        <p>
          I’m a User Experience Writer living on the California central coast. I
          speak about web accessbility and geek out over calligraphy and Bob’s
          Burgers.
        </p>
        <LinkButton linkTo="/blog" buttonText="Read my Blog" />
        <LinkButton linkTo="/" template="primary" buttonText="Subscribe" />
      </div>

      <BannerImage className={styles.banner} />
    </section>

    <section className={`${styles.featuredPosts} wrapper`}>
      <SectionHeader text="The Blog" />
      <StaticQuery
        query={graphql`
          query LatestPostsQuery {
            allWordpressPost(limit: 3) {
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

    <section className={styles.publishedIn}>
      <SectionHeader text="Published In" />
    </section>
  </Layout>
)

export default IndexPage
