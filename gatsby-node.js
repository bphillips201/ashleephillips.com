/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const caseStudyTemplate = path.resolve(`src/templates/case-study-template.js`)
  const magazineFeatureTemplate = path.resolve(
    `src/templates/magazine-feature-template.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 500
      ) {
        edges {
          node {
            frontmatter {
              path
              type
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
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.type === "Case Study") {
      createPage({
        path: node.frontmatter.path,
        component: caseStudyTemplate,
        context: {},
      })
    }

    if (node.frontmatter.type === "Magazine Feature") {
      createPage({
        path: node.frontmatter.path,
        component: magazineFeatureTemplate,
        context: {},
      })
    }
  })
}
