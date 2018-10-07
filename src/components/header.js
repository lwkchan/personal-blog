import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

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
  &:hover {
    text-decoration: underline;
  }
  `
const activeStyle = { textDecoration: 'underline' }

const isActive = ({isCurrent}) => {
  return isCurrent? {style: activeStyle} : null
}
const StyledExactLink = (props) => (
  <StyledLink getProps={isActive} {...props} />
);

const isPartiallyActive = ({isPartiallyCurrent}) => {
  return isPartiallyCurrent? {style: activeStyle} : null
}

const StyledPartialLink = (props) => (
  <StyledLink getProps={isPartiallyActive} {...props} />
);


const Header = () =>
(
    <Content>
      <h1>
        <StyledExactLink
          to="/">
          About
        </StyledExactLink>
        <StyledPartialLink
          to="/blog">
          Blog
        </StyledPartialLink>
      </h1>
    </Content>
)

export default Header
