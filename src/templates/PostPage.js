import React from "react"
import { Link } from "gatsby"
import BlogLayout from "../components/Bloglayout"
import CodeBlock from "../components/CodeBlock"
import ReactMarkdown from "react-markdown"

import { graphql } from "gatsby"
import SEO from "../components/seo"

const PostPage = ({
  data: {
    graphcms: { post },
  },
}) => {
  return (
    <BlogLayout>
      <SEO title={`${post.title} | | Liam Silk`} />
      <Link to="/">Back</Link>
      <h1>{post.title}</h1>
      <ReactMarkdown
        source={post.bodyMarkdown}
        renderers={{ code: CodeBlock }}
      />
    </BlogLayout>
  )
}

export const PageQuery = graphql`
  query PostQuery($id: ID!) {
    graphcms {
      post(where: { id: $id }) {
        title
        bodyMarkdown
      }
    }
  }
`
export default PostPage
