import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Wrapper from "../components/Wrapper/Wrapper"
import styles from "../styles/modules/page.module.scss"

const About = () => (
  <Layout className={styles.page}>
    <SEO
      title="About"
      description="I was born in a small town and raised in a bookstore."
    />
    <Wrapper width="thin">
      <h1>I was born in a small town and raised in a bookstore.</h1>
    </Wrapper>

    <Wrapper width="xthin" noUpPad>
      <p>
          At twenty-five, I moved to the West Coast with my cat and husband in
          tow. Now I hang my keys in San Luis Obispo, California, where I work
          remotely as a content strategist at Facebook. These days, I'm my
          team’s squeaky wheel, constantly asking, “How can we make this
          accessible?”
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
              Join the Central Coast UX Writers meetup
            </a>
          </li>
        </ul>
    </Wrapper>
  </Layout>
)

export default About
