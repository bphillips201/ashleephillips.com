import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SectionHeader from "../components/SectionHeader"
import SEO from "../components/SEO"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <SEO title={currentPage.title} />
        <section className="shaded-section">
          <div className="wrapper">
            <SectionHeader text={currentPage.title} headerType="h1" />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          </div>
        </section>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
