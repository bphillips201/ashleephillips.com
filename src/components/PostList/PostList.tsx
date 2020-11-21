import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import * as styles from "./PostList.module.scss"

type TPostListProps = TCaseStudy[]

const PostList: React.FC<TPostListProps> = (props: any) => {
  const { data } = props

  return (
    <ul className={styles.postList}>
      {data.map((post: any) => (
        <li key={post.id} className={styles.postBlock}>
          <div>
            <Link
              to={post.fields.path}
              title={post.title}
              className={styles.postImage}
            >
              <Img
                fluid={post.featuredImage.fluid}
                alt={post.featuredImage.description}
              />
            </Link>
            <div className={styles.postType}>{post.workType}</div>
            <Link to={post.fields.path} className={styles.postTitle}>
              {post.title}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PostList
