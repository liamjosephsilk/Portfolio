import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Heading, Paragraph } from '@atoms'
import { Article as ArticleInterface } from '../../../pages/articles'

const Article = styled.div `
    margin: 50px 0;
`

const StyledLink = styled(Link) `
    text-decoration: none;
    color: #F2203E;
`

const Info = styled.div`
    display: flex;
    align-items: center;
`


const ArticleLink: FC<ArticleInterface> = ({ frontmatter, slug, timeToRead, excerpt, id }) => {
    return (
        <Article key={id}>
            <StyledLink to={`/${slug}`}>
                <Heading level={2} weight="900" size="30px" line="1.3" mb="10px">{frontmatter.title}</Heading>
                <Info>
                    <Paragraph mb="5px" mt="0" mr="10px" >{timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'} read</Paragraph>
                    <Paragraph mb="5px" mt="0" mr="10px" weight="900" color="#F2203E" transform="uppercase" size="10px" spacing="0.09rem">{frontmatter.tag}</Paragraph>
                </Info>
                <Paragraph mt="5px">{excerpt}</Paragraph>
                
            </StyledLink>
        </Article>
    )
}

export default ArticleLink