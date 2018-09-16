import Layout from '../components/layout'
import React from 'react'
import rehypeReact from 'rehype-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

const Blogpost = ({data}) => {
  const node = data.markdownRemark
  return (
    <Layout>
      <h1>{node.frontmatter.title}</h1>
        <div>{renderAst(node.htmlAst)}</div>
    </Layout>
  )
}

export default Blogpost

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
      rawMarkdownBody
    }
  }
`;