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
        <LinkButton to="/blog" text="Read my Blog" />
        <LinkButton to="/" template="primary" text="Subscribe" />
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

      <LinkButton
        text="View my Work"
        to="/work"
        template="primary"
        className={styles.workButton}
      />
    </section>

    <section className={styles.newsletter}>
      <div className="wrapper">
        <div className="newsletter-cta">
          <h2>Come here often?</h2>
          <p>
            Subscribe to the newsletter for cool links, videos, and pick-me-ups
            delivered straight to your inbox. It's like a perfectly-timed email
            from your best friend.
          </p>
        </div>

        <div className="newsletter-signup">
          <form
            action="https://ashleephillips.us16.list-manage.com/subscribe/post?u=b111261bf5148bbfcf26596f6&amp;id=538876a268"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <label for="mce-EMAIL">What's Your Email?</label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              placeholder="Email address..."
            />

            <div
              class="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              class="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_b111261bf5148bbfcf26596f6_538876a268"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
