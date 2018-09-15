import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Intro = styled.div`
  max-width: 650px;
`

const IndexPage = () =>
(
  <Layout siteTitle='sitetitle' headerText='headertext'>
  <Intro>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/blog/">Go to the blog</Link>
  </Intro>
     

  </Layout>
)

export default IndexPage
