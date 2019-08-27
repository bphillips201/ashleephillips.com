import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Work = () => (
  <Layout>
    <SEO title="About" />
    <div className="wrapper">
      <div className="wrapper wrapper-thin">
        <h1>I was born in a small town and raised in a family bookstore.</h1>

        <p>
          At 25, I moved to the West Coast with my cat and husband in tow. Now I
          hang my keys in San Luis Obispo, California, where I works as a User
          Experience (UX) Writer. It’s in this role I found my passion for
          digital accessibility and became my team’s accessibility advocate,
          constantly asking, “How can we make this accessible?”.
        </p>

        <ul>
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
        </ul>
      </div>
    </div>
  </Layout>
)

export default Work
