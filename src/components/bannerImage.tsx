import React, { AllHTMLAttributes } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BannerImage: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { className = "" } = props
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
      className={className}
      fluid={file.childImageSharp.fluid}
      backgroundColor={`#fff`}
    />
  )
}

export default BannerImage
