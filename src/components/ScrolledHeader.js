import React from "react"

import { StyledScrolledHeader, StyledScrolledHeaderTitle } from "../lib/styles"
const ScrolledHeader = ({ title }) => {
  return (
    <StyledScrolledHeader>
      <StyledScrolledHeaderTitle>{title}</StyledScrolledHeaderTitle>
    </StyledScrolledHeader>
  )
}

export default ScrolledHeader
