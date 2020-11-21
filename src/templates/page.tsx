import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Wrapper from '../components/Wrapper/Wrapper'
import styles from '../styles/modules/page.module.scss'
import { TPageGlobals } from '../utils/constants'

const Page: React.FC<TPageGlobals> = props => {
  const { title, headline, content } = props.data.contentfulPage

  return (
    <Layout className={styles.page}>
      <SEO title={title} description={headline} />
      <Wrapper width="thin">
        <h2>{headline}</h2>
      </Wrapper>

      <Wrapper width="xthin">
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </Wrapper>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      headline
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
