import React from 'react'
import Layout from '../components/layout'

const Blog = () => (
    <Layout siteTitle='sitetitle' headerText='headertext'>
        <p>this is a test</p>
    </Layout>
)

export default Blog

export const pageQuery = graphql`
  query allBlogPostsQuery {
    allContentfulBlogpost(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          id
          title
          author  
          bodyText {
            bodyText
          }
        }
      }
    }
  }
`