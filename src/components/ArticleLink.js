import React from "react"
import { StyledCard, StyledCardTitle, StyledCardLink } from "../lib/styles"
import LineBreak from "../components/LineBreak"

const ArticleLink = ({ title, tag, date, description, link, id, slug }) => {
  return (
    <StyledCard>
      <LineBreak />
      <StyledCardTitle>{title}</StyledCardTitle>
      <p>{description}</p>
      <StyledCardLink to={slug}>Read Article</StyledCardLink>
    </StyledCard>
  )
}

export default ArticleLink
