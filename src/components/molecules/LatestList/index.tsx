import React, { FC } from 'react'

import SectionContainer from '../../atoms/SectionContainer'
import ArticleCard from '../../atoms/ArticleCard/index'

export type Article = {
    title: string,
    tag: string 
}

type LatestArticlesProps = {
    articles: Article[]
}

const LatestList: FC<LatestArticlesProps> = ({ articles }) => {
    return (
        <SectionContainer rows="auto 1fr" gap="20px">
            {articles.map(({ title }, i) => (
                <ArticleCard key={i} title={title}/>
            ))}
        </SectionContainer>
    )
} 

export default LatestList

            