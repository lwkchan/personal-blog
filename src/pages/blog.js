import ArticlePreview from '../components/article-preview/article-preview'
import Layout from '../components/layout/layout'
import React from 'react'
import styles from './styles/blog.module.css'

const Blog = ({data}) => {
  const blogposts = data.allContentfulBlogpost.edges
  return (
    <Layout siteTitle='sitetitle' headerText='headertext'>
      <div className={styles.blogList}>
        <p>Here are a list of recent blogposts</p>
        <ul>
          {blogposts.map(({node}) => {
            return (
              <ArticlePreview key={node.id} node={node}/>
            )
          })}
        </ul> 
      </div>
    </Layout>)
}

export default Blog

export const pageQuery = graphql`
  query allBlogPostsQuery {
    allContentfulBlogpost (sort: {fields: [publicationDate] order:DESC}) {
      edges {
        node {
          heroImage {
            file {
              url
            }
            resolutions(width:152, height:152, resizingBehavior: PAD) {
              ...GatsbyContentfulResolutions
            }
          }
          id
          publicationDate
          slug
          subHeading
          title
        }
      }
    }
  }
`