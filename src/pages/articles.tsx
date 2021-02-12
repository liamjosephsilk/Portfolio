import React, { FC } from 'react'
import styled from 'styled-components'
import { Layout } from '@layouts'
import { ArticleLink } from '@molecules'
import { Hero } from '@organisms'
import { HeroEnum } from '../lib/enums'
import { graphql } from 'gatsby'

const ArticlesWrapper = styled.div`
    width: 60%;
    margin: 0 auto;

    @media screen and (max-width: 760px) {
        width: 90%;
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }

    @media screen and (min-width: 1900px) {
        width: 40%;
    }
`
export interface Article  {
    frontmatter: {
        title: string,
        tag: string
    },
    timeToRead: number,
    slug: string,
    id: string,
    excerpt: string
}

type D = {
    data: {
        allMdx: {
            nodes: Article[]
        }
    }
}

const ArticlesPage: FC<D> = ({ data }) => {

    return (
        <Layout header={true} >
            <Hero type={HeroEnum.ArticlesPage} height="auto" mt="30px" />
            <ArticlesWrapper>
                {data.allMdx.nodes.map(({ frontmatter, timeToRead, slug, id, excerpt }) => (
                    <ArticleLink frontmatter={frontmatter} slug={slug} timeToRead={timeToRead} excerpt={excerpt} id={id}/>
                ))}
            </ArticlesWrapper>
        </Layout>
    )
}

export default ArticlesPage

export const AllArticles = graphql`
  {
    allMdx {
    nodes {
		id
        slug
        timeToRead
        excerpt
        frontmatter {
			title
            tag
      }
    }
  }
  }
`