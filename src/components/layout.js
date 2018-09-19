import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../theme'

const Body = styled.div`
  font-family: 'Karla', sans-serif;
`

const Main = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children, title }) =>
( 
  <ThemeProvider theme={theme}>
    <Body>
      <Helmet title={title} />
      <Main>
      <Header/>
        {children}
      </Main>
    </Body>
  </ThemeProvider>
)

export default Layout
