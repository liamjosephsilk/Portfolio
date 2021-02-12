import React, {FC} from 'react'
import styled from 'styled-components'
import { Heading } from '@atoms'
import { Link } from 'gatsby'

const Card = styled(Link)`
    /* background: #F2203E; */
    border: 3px solid white;
    grid-column-end: span 6;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    padding: 0 20px;

    transition: all ease-in-out 0.3s;

    &:hover {
        background: #F2203E;
        border-color: #F2203E;
        transform: scale(1.05)
    }

    @media screen and (max-width: 760px) {
        grid-column-end: span 12;
    }
`

const TagContainer = styled.div`
    border: 2px solid white;
    padding: 0.2rem 1rem;
    margin-top: 20px;
`

type ArticleCardProps = {
    title: string
    id: string,
    slug: string,
    tag: string
}

const ArticleCard: FC<ArticleCardProps> = ({ title, id, slug, tag }) => {
    return (
        <Card to={slug}>
            <div style={{ textAlign: "center"}}>
                <h3>{ title }</h3>
            </div>
            
            <TagContainer>
                <p>{tag}</p>
            </TagContainer>
        </Card>
    )
}

export default ArticleCard