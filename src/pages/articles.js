import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import ArticleLink from "../components/ArticleLink"
import { ArticlesIndexWrapper, Title, SubTitle } from "../lib/styles"

const BlogListQuery = graphql`
  {
    graphcms {
      posts {
        bodyMarkdown
        id
        publishDate
        slug
        title
        tag
      }
    }
  }
`

const ArticlesIndex = () => (
  <StaticQuery
    query={BlogListQuery}
    render={data => (
      <Layout>
        <ArticlesIndexWrapper>
          <Title>Articles</Title>
          <SubTitle
            fontSize="1.1rem"
            fontFamily="IBM Plex Mono"
            marginBottom="2rem"
          >
            Just Some Things I Write About
          </SubTitle>
          {/* <SEO title="Liam Silk | | Blog" /> */}
          {data.graphcms.posts.map(post => {
            const { title, id, slug, tag } = post
            return (
              <ArticleLink
                tags={["javascript"]}
                title={title}
                id={id}
                key={id}
                slug={`/posts/${slug}`}
                tag={tag}
              />
            )
          })}
        </ArticlesIndexWrapper>
      </Layout>
    )}
  />
)

export default ArticlesIndex
