import React from "react"
import { StyledHeading, StyledSpan, StyledHeadingLink } from "../lib/styles"

const Heading = () => {
  return (
    <StyledHeadingLink to="/">
      <StyledHeading>
        <StyledSpan>Liam</StyledSpan>Silk
      </StyledHeading>
    </StyledHeadingLink>
  )
}

export default Heading
