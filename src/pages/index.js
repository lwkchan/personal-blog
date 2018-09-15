import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import styles from './styles/index.module.css'

const IndexPage = () =>
(
  <Layout siteTitle='sitetitle' headerText='headertext'>
    <div className={styles.text}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/blog/">Go to the blog</Link>
    </div>
  </Layout>
)

export default IndexPage
