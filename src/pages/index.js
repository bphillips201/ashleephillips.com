import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ux writer`, `accessibility`, `speaker`]} />
    <h1>Hi, my dudes</h1>
    <p>
      I’m a User Experience Writer living on the California central coast. I
      speak about web accessbility and geek out over calligraphy and Bob’s
      Burgers.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
