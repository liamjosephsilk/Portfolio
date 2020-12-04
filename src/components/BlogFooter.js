import React from "react"
import {
  StyledBlogFooter,
  StyledFooterCopy,
  StyledFooterLink,
} from "../lib/styles"

const BlogFooter = () => {
  return (
    <StyledBlogFooter>
      <StyledFooterCopy>Let's Connect!</StyledFooterCopy>
      <StyledFooterCopy>
        I sometimes hang around{" "}
        <StyledFooterLink to="https://twitter.com/liam_silk">
          @liam_silk
        </StyledFooterLink>
      </StyledFooterCopy>
    </StyledBlogFooter>
  )
}

export default BlogFooter
