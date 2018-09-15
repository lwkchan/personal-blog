import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const activeLinkStyle = {textDecoration: 'underline'}

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
`

const StyledLink = styled(Link)`
  margin: 5%;
  color: ${(props) => props.theme.primaryColor};
  text-decoration: unset;
  font-weight: initial;
  font-size: large;
`

const Header = () =>
(
    <Content>
      <h1>
        <StyledLink
          activeStyle={activeLinkStyle} 
          exact
          to="/">
          About
        </StyledLink>
        <StyledLink
          activeStyle={activeLinkStyle}
          exact
          to="/blog">
          Blog
        </StyledLink>
      </h1>
    </Content>
)

export default Header
