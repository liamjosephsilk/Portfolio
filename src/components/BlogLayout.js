import React from "react"
import { GlobalStyle, StyledArticle } from "../lib/styles"

const BlogLayout = ({ children }) => {
  return (
    <StyledArticle>
      <GlobalStyle />
      {children}
    </StyledArticle>
  )
}

export default BlogLayout
