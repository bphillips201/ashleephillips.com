import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/modules/page.module.scss"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className={`${styles.page} chunk`}>
      <div className="wrapper wrapper-thin">
        <h1>I was born in a small town and raised in a family bookstore.</h1>
      </div>

      <div className="wrapper wrapper-small">
        <p>
          At 25, I moved to the West Coast with my cat and husband in tow. Now I
          hang my keys in San Luis Obispo, California, where I works as a User
          Experience (UX) Writer at MINDBODY. It’s in this role I found my
          passion for digital accessibility and became my team’s accessibility
          advocate, constantly asking, “How can we make this accessible?”
        </p>

        <ul className={styles.unstyledList}>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ashleephillips/"
              target="_blank"
            >
              View my LinkedIn profile
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://medium.com/@ashleeletters"
              target="_blank"
            >
              Read my blog on Medium
            </a>
          </li>

          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.meetup.com/Central-Coast-UX-Writers-Meetup/"
              target="_blank"
            >
              Join the Central Coast UX Writers Meetup
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default About
