import Link from 'gatsby-link'
import React from 'react'
import styles from './header.module.css'

const Header = ({ headerText }) =>
(
  <div className={styles.background}>
    <div className={styles.content}>
      <h1 className={styles.heading}>
        <Link to="/">
          headerText
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
