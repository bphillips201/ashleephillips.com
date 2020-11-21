import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type TSEOProps = {
  description?: string
  lang?: string
  meta?: []
  image?: string
  title: string
}

const SEO: React.FC<TSEOProps> = props => {
  const { title, meta = [], lang = 'en', image = '', description = '' } = props
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        file(relativePath: { eq: "ashlee.jpg" }) {
          publicURL
        }
      }
    `
  )

  const bannerImage = image
    ? site.siteMetadata.siteUrl + image
    : site.siteMetadata.siteUrl + file.publicURL
  const metaDescription = description || site.siteMetadata.description
  const titleTemplate =
    title === 'Home'
      ? `${site.siteMetadata.title} | ${metaDescription}`
      : `${title} | ${site.siteMetadata.title}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: bannerImage,
        },
        {
          name: `twitter:card`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: bannerImage,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
