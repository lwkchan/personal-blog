import React from 'react'
import Img from 'gatsby-image'

const ArticlePreview = ({node}) => (
    <article className="article-preview" key={node.id}>
        <div>
        <div className="article-preview__details">
            <h3>{node.title}</h3>
            <h4>{node.subHeading}</h4>
            <p>{node.publicationDate}</p>
        </div>
        <Img className="article-preview__image" resolutions={node.heroImage.resolutions}/>
        </div>
    </article>
)

export default ArticlePreview