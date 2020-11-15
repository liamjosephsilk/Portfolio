import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import BlogLayout from "../components/BlogLayout"
import CodeBlock from "../components/CodeBlock"
import BlogFooter from "../components/BlogFooter"
import ScrolledHeader from "../components/ScrolledHeader"
import ReactMarkdown from "react-markdown"
import backArrow from "../images/backArrow.svg"
import { ArticleTitle } from "../lib/styles"

import { graphql } from "gatsby"
import SEO from "../components/seo"

const PostPage = ({
  data: {
    graphcms: { post },
  },
}) => {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 500) {
          setHeaderVisible(true)
        } else {
          setHeaderVisible(false)
        }
      })
    }
  })

  return (
    <BlogLayout>
      {headerVisible ? <ScrolledHeader title={post.title} /> : <></>}
      <SEO title={`${post.title} | | Liam Silk`} />
      <Link to="/articles">
        <img height=" 20px" width="20px" src={backArrow} alt="" />
      </Link>
      <ArticleTitle>{post.title}</ArticleTitle>
      <ReactMarkdown
        source={post.bodyMarkdown}
        renderers={{ code: CodeBlock }}
      />
      <BlogFooter />
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
