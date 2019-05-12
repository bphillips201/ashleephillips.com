import React from "react"
import SectionHeader from "../components/SectionHeader"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <section className="shaded-section">
      <SectionHeader text="Blog" headerType="h1" />
    </section>
  </Layout>
)

export default Blog
