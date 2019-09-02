import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/modules/post.module.scss"

const PostList = ({ postData }) => (
  <ul className={styles.postList}>
    {postData.map(post => (
      <li key={post.node.id}>
        {post.node.frontmatter.featuredImage && (
          <Link
            className={styles.postThumbnail}
            title={post.node.frontmatter.title}
            to={post.node.frontmatter.path}
          >
            <Img
              fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </Link>
        )}
        <div className={styles.categories}>{post.node.frontmatter.type}</div>
        <Link className={styles.postTitle} to={post.node.frontmatter.path}>
          <div
            dangerouslySetInnerHTML={{ __html: post.node.frontmatter.title }}
          />
        </Link>
      </li>
    ))}
  </ul>
)

PostList.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object),
}

export default PostList
