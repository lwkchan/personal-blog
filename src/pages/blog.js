import ArticlePreview from '../components/article-preview/article-preview'
import Layout from '../components/layout'
import React from 'react'

const Blog = ({data}) => {
  const blogposts = data.allContentfulBlogpost.edges
  return (
    <Layout siteTitle='sitetitle' headerText='headertext'>
        <p>Here are a list of recent blogposts</p>
        <ul>
        {blogposts.map(({node}) => {
          return (
            <ArticlePreview node={node}/>
          )
        })}
        </ul> 
    </Layout>)
}

export default Blog

export const pageQuery = graphql`
  query allBlogPostsQuery {
    allContentfulBlogpost {
      edges {
        node {
          title
          subHeading
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`