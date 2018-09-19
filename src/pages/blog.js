import ArticlePreview from '../components/article-preview'
import Layout from '../components/layout'
import React from 'react'



const Blog = ({data}) => {
  const blogposts = data.allMarkdownRemark.edges
  return (
    <Layout title={data.site.siteMetadata.title}>
      <div>
          {blogposts.map(({node}) => {
            return (
              <ArticlePreview key={node.id} node={node}/>
            )
          })}
      </div>
    </Layout>)
}

export default Blog

export const pageQuery = graphql`
  query AllBlogpostsAndTitleQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            indexImage {
              childImageSharp {
                resolutions(width:152, height:152) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      id
      siteMetadata {
        title        
      }
    }
  }
`