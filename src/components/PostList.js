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
                resolutions={
                  post.node.featured_media.localFile.childImageSharp.resolutions
                }
              />
            </Link>
          )}
          <div className="categories">
            <ul>
              {post.node.categories.map(cat => (
                <li key={cat.id}>
                  <Link to={`category/${cat.slug}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to={post.node.path}>{post.node.title}</Link>
        </li>
      ))}
    </ul>
  )
}

PostList.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object),
}

export default PostList
