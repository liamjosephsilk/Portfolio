import React, {FC} from 'react'
import styled from 'styled-components'

const Card = styled.div`
    /* background: #F2203E; */
    border: 3px solid white;
    grid-column-end: span 6;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all ease-in-out 0.3s;

    &:hover {
        background: #F2203E;
        border-color: #F2203E;
        transform: scale(1.05)
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
        <Card>
            <div style={{background: "green", textAlign: "center"}}>
                <h3>{ title }</h3>
            </div>
            
            <TagContainer>
                <p>{tag}</p>
            </TagContainer>
        </Card>
    )
}

export default ArticleCard