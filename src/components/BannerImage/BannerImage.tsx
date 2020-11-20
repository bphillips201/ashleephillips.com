import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import * as styles from "./BannerImage.module.scss"

const BannerImage: React.FC = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ashlee.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={styles.bannerImage}
      fluid={file.childImageSharp.fluid}
      backgroundColor={`#fff`}
    />
  )
}

export default BannerImage
