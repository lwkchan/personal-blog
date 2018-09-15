import Link from 'gatsby-link'
import React from 'react'
import styles from './header.module.css'

const activeLinkStyle = {textDecoration: 'underline'}

const Header = () =>
(
    <div className={styles.content}>
      <h1>
        <Link
          activeStyle={activeLinkStyle} 
          exact
          className={styles.link} to="/">
          About
        </Link>
        <Link
          activeStyle={activeLinkStyle}
          exact
          className={styles.link} to="/blog">
          Blog
        </Link>
      </h1>
    </div>
)

export default Header
