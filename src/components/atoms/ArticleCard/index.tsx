import React, {FC} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Card = styled.div`
    /* background: #F2203E; */
    border: 3px solid white;
    grid-column-end: span 6;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all ease-in-out 0.3s;

    &:hover {
        background: #F2203E;
        border-color: #F2203E;
        transform: scale(1.05)
    }
`

type ArticleCardProps = {
    title: string
}

const ArticleCard: FC<ArticleCardProps> = ({ title }) => {
    return (
        <Card>
            <h3>{ title }</h3>
        </Card>
    )
}

export default ArticleCard