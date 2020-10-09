/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
// const path = 'post'

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    description
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }) => {
          const path = node.frontmatter.path

          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path
            }
          })
        })
      })
    )
  })
})