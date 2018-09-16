import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
`

const ArticleCard = styled.article`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    height: auto;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
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
    margin: 0;
`
const Subtitle = styled.p`
    font-size: 12px;
    margin: 0;
`

const ArticlePreview = ({node}) => (
    <StyledLink to={`/blog${node.fields.slug}`}>
        <ArticleCard>
                <Details>
                    <Title>
                        {node.frontmatter.title}
                    </Title>
                    <Subtitle>
                        {node.excerpt}
                    </Subtitle>
                    <PublicationDate>
                        {node.frontmatter.date}
                    </PublicationDate>
                </Details>
        </ArticleCard>
    </StyledLink>
)

export default ArticlePreview