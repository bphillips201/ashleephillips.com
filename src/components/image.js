import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query {
          coyoteOak: file(relativePath: { eq: "coyote-oak.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          weddingStandard: file(relativePath: { eq: "wedding-standard.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          edibleSLO: file(relativePath: { eq: "edible-slo.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  )
}

export const CoyoteOakLogo = withImageData(props => (
  <Img fluid={props.imageData.coyoteOak.childImageSharp.fluid} />
))
export const WeddingStandardLogo = withImageData(props => (
  <Img fluid={props.imageData.weddingStandard.childImageSharp.fluid} />
))
export const EdibleSLOLogo = withImageData(props => (
  <Img fluid={props.imageData.edibleSLO.childImageSharp.fluid} />
))
