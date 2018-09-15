import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import styled from 'styled-components'

const Body = styled.div`
  font-family: 'Karla', sans-serif;
`

const Main = styled.div`
  margin: 0 auto;
  max-width: 650px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children, siteTitle, pageName }) =>
(
    <Body>
      <Helmet title={siteTitle}/>
      <Main>
      <Header headerText={pageName} />
        {children}
      </Main>
    </Body>
)

export default Layout
