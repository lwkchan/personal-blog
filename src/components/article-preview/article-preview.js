import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React from 'react'
import styles from './article-preview.module.css'

const ArticlePreview = ({node}) => (
    <article className={styles.container} key={node.id}>
        <div className={styles.details}>
        <Link to={`/blog/${node.slug}/`}>
            <h3>{node.title}</h3>
            <h4>{node.subHeading}</h4>
        </Link>
            <p className={styles.publicationDate}>{node.publicationDate}</p>
        </div>
        <Img className={styles.previewImage} resolutions={node.heroImage.resolutions}/>
    </article>
)

export default ArticlePreview