import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import Img from "gatsby-image"
import Layout from "../components/Layout"

import styles from "../styles/modules/Post.module.scss"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <section className={`${styles.post} wrapper wrapper-thin`}>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`
