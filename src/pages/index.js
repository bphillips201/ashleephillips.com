import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/Image"
import SEO from "../components/SEO"
import BannerImage from "../components/BannerImage"

import styles from "../styles/modules/Home.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ux writer`, `accessibility`, `speaker`]} />

    <section className={`${styles.hero} wrapper`}>
      <div className={styles.cta}>
        <h1>Hi, my dudes</h1>
        <p>
          I’m a User Experience Writer living on the California central coast. I
          speak about web accessbility and geek out over calligraphy and Bob’s
          Burgers.
        </p>
      </div>

      <BannerImage className={styles.banner} />
    </section>
  </Layout>
)

export default IndexPage
