/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "ContentfulCaseStudy") {
    createNodeField({
      node,
      name: "path",
      value: `/work/case-study/${node.slug}`,
    })
  }

  if (node.internal.type === "ContentfulArticle") {
    createNodeField({
      node,
      name: "path",
      value: `/work/article/${node.slug}`,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulCaseStudy(sort: { order: DESC, fields: publishDate }) {
        edges {
          node {
            id
            fields {
              path
            }
          }
        }
      }
      allContentfulArticle {
        edges {
          node {
            id
            fields {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`src/templates/page.tsx`),
      context: {
        id: node.id
      },
    })
  })

  result.data.allContentfulCaseStudy.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: path.resolve(`src/templates/case-study.tsx`),
      context: {
        id: node.id
      },
    })
  })

  result.data.allContentfulArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: path.resolve(`src/templates/article.tsx`),
      context: {
        id: node.id
      },
    })
  })
}
