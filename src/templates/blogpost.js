import Layout from '../components/layout'
import React from 'react'

const Blogpost = ({data}) => {
  const blogpost = data.allContentfulBlogpost.edges[0].node
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

export default Blogpost

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
