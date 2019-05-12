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
import {
  CoyoteOakLogo,
  EdibleSLOLogo,
  WeddingStandardLogo,
} from "../components/Image"

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

      {/* <LinkButton buttonText="View my Work" to="/work" template="primary" /> */}
    </section>

    <section className={styles.newsletter}>
      <div className="wrapper">
        <h2>Come here often?</h2>
      </div>
    </section>
  </Layout>
)

export default IndexPage
