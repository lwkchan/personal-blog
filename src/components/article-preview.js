import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const ArticleCard = styled.article`
    margin: 0 auto;
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: 30px auto;
    height: 130px;
`

const Details = styled.div`
    max-width: 60%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    align-items: stretch;
`

const PublicationDate = styled.p`
    margin-bottom: 0;
`

const ArticlePreview = ({node}) => (
    <ArticleCard>
        <Details>
        <Link to={`/blog/${node.slug}/`}>
            <h3>{node.title}</h3>
            <h4>{node.subHeading}</h4>
        </Link>
            <PublicationDate/>
        </Details>
        <Img resolutions={node.heroImage.resolutions}/>
    </ArticleCard>
)

export default ArticlePreview