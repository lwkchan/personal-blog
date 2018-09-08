import React from 'react'

const ArticlePreview = ({node}) => (
    <article className="article-preview">
        <div>
        <div className="article-preview__details">
            <h3>{node.title}</h3>
            <h4>{node.subHeading}</h4>
        </div>
        <img className="article-preview__image" src={node.heroImage.file.url}></img>
        </div>
    </article>
)

export default ArticlePreview