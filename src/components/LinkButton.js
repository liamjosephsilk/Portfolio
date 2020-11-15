import React from "react"
import { StyledButton, StyledButtonLink } from "../lib/styles"

const LinkButton = ({ text, to }) => {
  return (
    <StyledButton>
      <StyledButtonLink to={to}>{text}</StyledButtonLink>
    </StyledButton>
  )
}

export default LinkButton
