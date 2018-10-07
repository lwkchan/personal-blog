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

const Subheading = styled.h2`
  line-height: 30px;
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: ExternalLink,
    h2: Subheading
  }
}).Compiler

const PostContent = styled.div`
  line-height: 22px;
`

const Blogpost = ({data}) => {
  const node = data.markdownRemark
  return (
    <Layout>
      <h1>{node.frontmatter.title}</h1>
      <PublicationDate>{node.frontmatter.date}</PublicationDate>
        <PostContent>{renderAst(node.htmlAst)}</PostContent>
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