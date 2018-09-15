import React from 'react'
import Helmet from 'react-helmet'
import Header from '../header/header'
import styles from './layout.module.css'

const Layout = ({ children, siteTitle, pageName }) =>
(
 
    <div className={styles.body}>
      <Helmet title={siteTitle}/>
      <div className={styles.layout}>
      <Header headerText={pageName} />
        {children}
      </div>
    </div>
)

export default Layout
