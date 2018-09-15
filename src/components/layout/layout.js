import React from 'react'
import Helmet from 'react-helmet'
import Header from '../header/header'
import styles from './layout.module.css'

const Layout = ({ children, siteTitle, pageName }) =>
(
  <div className={styles.body}>
    <Helmet title={siteTitle}/>
    <Header headerText={pageName} />
    <div className={styles.layout}>
      {children}
    </div>
  </div>
)

export default Layout
