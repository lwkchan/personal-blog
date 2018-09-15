import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { StyledLink } from '../theme'

const IndexPage = () =>
(
  <Layout siteTitle='sitetitle' headerText='headertext'>
      <h2>I'm Laura Chan, a web developer based in London.</h2>
      <p>Here are some links you might be interested in:</p>
      <ul>
        <li><StyledLink href="http://www.github.com/lwkchan">Github</StyledLink></li>
        <li><StyledLink href="https://www.linkedin.com/in/lwkchan/">LinkedIn</StyledLink></li>
        <li>Besides my blog here, I also have some posts on <StyledLink href="https://medium.com/@lwkchan">Medium</StyledLink></li>
      </ul>
  </Layout>
)

export default IndexPage
