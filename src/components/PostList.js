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
          {post.node.featured_media && (
            <Link to={post.node.path}>
              <Img
                fluid={post.node.featured_media.localFile.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.node.featured_media.alt_text}
              />
            </Link>
          )}
          <div className={styles.categories}>
            <ul>
              {post.node.categories.map(cat => (
                <li key={cat.id}>{cat.name}</li>
              ))}
            </ul>
          </div>
          <Link className={styles.postTitle} to={post.node.path}>
            {post.node.title}
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
