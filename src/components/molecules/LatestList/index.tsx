import React, { FC } from 'react'
import { SectionContainer, ArticleCard } from '@atoms'

export type Article = {
    title: string,
    tag: string ,
    slug: string,
    id: string,
}

type LatestArticlesProps = {
    articles: Article[]
}

const LatestList: FC<LatestArticlesProps> = ({ articles }) => {
    // const a = articles.map((b) => {
    //     console.log(b)
    // })
    // console.log(a)

    return (
        <SectionContainer rows="auto 1fr" gap="20px">
            {articles.map(({ title, slug, tag, id  }) => (
                <ArticleCard key={id} title={title} slug={slug} tag={tag} id={id} />
            ))}
        </SectionContainer>
    )
} 

export default LatestList

            