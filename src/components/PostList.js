import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/modules/Post.module.scss"

const PostList = ({ postData }) => {
  return (
    <ul className={styles.postList}>
      {postData.map(post => (
        <li key={post.node.id}>
          {post.node.frontmatter.featuredImage && (
            <Link to={post.node.frontmatter.path}>
              <Img
                fluid={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                }
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </Link>
          )}
          <Link className={styles.postTitle} to={post.node.frontmatter.path}>
            <span
              dangerouslySetInnerHTML={{ __html: post.node.frontmatter.title }}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

PostList.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object),
}

export default PostList
