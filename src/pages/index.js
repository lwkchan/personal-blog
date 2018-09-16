import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const ExternalLink = styled.a`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const IndexPage = () =>
(
  <Layout siteTitle='sitetitle' headerText='headertext'>
      <h2>I'm Laura Chan, a web developer based in London.</h2>
      <p>Here are some links you might be interested in:</p>
      <ul>
        <li><ExternalLink href="http://www.github.com/lwkchan">Github</ExternalLink></li>
        <li><ExternalLink href="https://www.linkedin.com/in/lwkchan/">LinkedIn</ExternalLink></li>
        <li>Besides my blog here, I also have some posts on <ExternalLink href="https://medium.com/@lwkchan">Medium</ExternalLink></li>
      </ul>
  </Layout>
)

export default IndexPage
