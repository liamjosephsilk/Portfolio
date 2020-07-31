import React from "react"
import { Link } from "gatsby"
import {
  StyledCard,
  StyledTag,
  StyledTagGroup,
  StyledCardTitle,
  StyledDesc,
} from "../lib/styles"

const Card = ({ title, tag, date, description, link, id, slug }) => {
  return (
    <Link to={slug} style={{ color: "white", textDecoration: "none" }}>
      <StyledCard>
        <StyledTagGroup>
          <StyledTag>{tag}</StyledTag>
        </StyledTagGroup>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledDesc>{description}</StyledDesc>
      </StyledCard>
    </Link>
  )
}

export default Card
