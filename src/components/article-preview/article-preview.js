import Img from 'gatsby-image'
import React from 'react'
import styles from './article-preview.module.css'

const ArticlePreview = ({node}) => (
    <article className={styles.container} key={node.id}>
        <div className={styles.details}>
            <h3>{node.title}</h3>
            <h4>{node.subHeading}</h4>
            <p className={styles.publicationDate}>{node.publicationDate}</p>
        </div>
        <Img className={styles.previewImage} resolutions={node.heroImage.resolutions}/>
    </article>
)

export default ArticlePreview