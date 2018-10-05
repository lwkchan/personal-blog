import Layout from '../components/layout'
import { graphql } from 'gatsby'
import React from 'react'
import rehypeReact from 'rehype-react'
import styled from 'styled-components'

const PublicationDate = styled.h3`
  color: ${(props) => props.theme.primaryColor};
`

const ExternalLink = styled.a`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: ExternalLink
  }
}).Compiler

const Blogpost = ({data}) => {
  const node = data.markdownRemark
  return (
    <Layout>
      <h1>{node.frontmatter.title}</h1>
      <PublicationDate>{node.frontmatter.date}</PublicationDate>
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
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;