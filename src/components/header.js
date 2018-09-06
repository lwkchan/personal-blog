import Link from 'gatsby-link'
import React from 'react'

const Header = ({ headerText }) =>
(
  <div
    style={{
      background: 'orange',
      marginBottom: '1.50rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black'
          }}
        >
          {headerText}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
