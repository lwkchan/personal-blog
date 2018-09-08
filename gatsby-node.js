const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogpost = path.resolve('./src/templates/blogpost.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogpost {
              edges {
                node {
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
          
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogpost.edges
        posts.forEach(({ node }) => {
            const { slug } = node;
          createPage({
            path: `/blog/${slug}/`,
            component: blogpost,
            context: {
              slug
            },
          })
        })
      })
    )
  })
}