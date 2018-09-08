import Layout from '../components/layout'
import React from 'react'

const BlogpostTemplate = ({data}) => {
  const blogpost = data.allContentfulblogpost.edges[0].node
  console.log(blogpost)
  const { author, title, bodyText } = blogpost
  return (
    <Layout>
      <h1>{title}</h1>
      <h2>By {author}</h2>
      <p>{bodyText.bodyText}</p>
    </Layout>
  )
}

export default BlogpostTemplate

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
