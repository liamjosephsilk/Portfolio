import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Card from "../components/Card"

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
        {/* <SEO title="Liam Silk | | Blog" /> */}
        {data.graphcms.posts.map(post => {
          const { title, id, slug, tag } = post
          return (
            <Card
              tags={["javascript"]}
              title={title}
              id={id}
              key={id}
              slug={`/posts/${slug}`}
              tag={tag}
            />
          )
        })}
      </Layout>
    )}
  />
)

export default ArticlesIndex
