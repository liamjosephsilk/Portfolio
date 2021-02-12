import React, { FC } from 'react'
import { SectionContainer, ArticleCard } from '@atoms'

export type Article = {
    frontmatter: {
        title: string,
        tag: string,
    },
    slug: string,
    id: string,
}

type LatestArticlesProps = {
    articles: Article[]
}

const LatestList: FC<LatestArticlesProps> = ({ articles }) => {
    return (
        <SectionContainer rows="auto 1fr" gap="20px">
            {articles.map(({ frontmatter, slug, id  }) => (
                <ArticleCard key={id} title={frontmatter.title} slug={slug} tag={frontmatter.tag} id={id} />
            ))}
        </SectionContainer>
    )
} 

export default LatestList

            