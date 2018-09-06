import Layout from '../components/layout'
import React from 'react'

const BlogPostTemplate = ({data}) => {
  const blogPost = data.allContentfulBlogpost.edges[0].node
  console.log(blogPost)
  const { author, title, bodyText } = blogPost
  return (
    <Layout>
      <h1>{title}</h1>
      <h2>By {author}</h2>
      <p>{bodyText.bodyText}</p>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogpostQuery($slug: String!) {
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
