import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Intro = styled.div`

`

const IndexPage = () =>
(
  <Layout siteTitle='sitetitle' headerText='headertext'>
    <Intro>
        <h2>I'm Laura Chan, a web developer based in London.</h2>
        <p>Here are some links you might be interested in:</p>
        <ul>
						<li><a href="http://www.github.com/lwkchan">Github</a></li>
						<li><a href="https://www.linkedin.com/in/lwkchan/">LinkedIn</a></li>
						<li>Besides my blog here, I also have some posts on <a href="https://medium.com/@lwkchan">Medium</a></li>
					</ul>
    </Intro>
  </Layout>
)

export default IndexPage
