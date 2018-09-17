import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`

const ArticleCard = styled.article`
    color: ${(props) => props.theme.primaryColor};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    height: auto;
    text-decoration: none;
    min-height: 152px;
`

const Details = styled.div`
    max-width: 60%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 0;
`

const PublicationDate = styled.p`
    margin-bottom: 0;
`

const Title = styled.p`
    font-size: 20px;
    margin-top: 0;
`
const Subtitle = styled.p`
    font-size: 12px;
`

const ArticlePreview = ({node}) => {
    const { indexImage, title, date } = node.frontmatter
    const indexImageExists = !!indexImage
    return ( 
        <ArticleCard>
                <Details>
                <StyledLink to={`/blog${node.fields.slug}`}>
                    <Title>
                        {title}
                    </Title>
                    <Subtitle>
                        {node.excerpt}
                    </Subtitle>
                </StyledLink>
                    <PublicationDate>
                        {date}
                    </PublicationDate>
                </Details>
                { indexImageExists
                    && 
                <Img resolutions={indexImage.childImageSharp.resolutions} /> }
        </ArticleCard>
)}

export default ArticlePreview