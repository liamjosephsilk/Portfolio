import React from "react"
import { Link } from "gatsby"
import {
  StyledBlogFooter,
  StyledSocialLink,
  StyledSocialList,
  StyledFooterCopy,
} from "../lib/styles"

const BlogFooter = () => {
  return (
    <StyledBlogFooter>
      <StyledFooterCopy>Let's Connect!</StyledFooterCopy>
      <StyledFooterCopy>
        I sometimes hang around{" "}
        <Link to="https://twitter.com/liam_silk">@liam_silk</Link>
      </StyledFooterCopy>
    </StyledBlogFooter>
  )
}

export default BlogFooter
