import React from "react"
import { Link } from "gatsby"
import BlogLayout from "../components/BlogLayout"
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
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 33 53"
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-563 -146)">
            <path
              id="Union_1"
              data-name="Union 1"
              d="M0,24,28,48ZM28,0,0,24Z"
              transform="translate(565.5 148.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="7"
            />
          </g>
        </svg>
      </Link>
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
