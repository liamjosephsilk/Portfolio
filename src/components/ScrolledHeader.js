import React from "react"

import { StyledScrolledHeader, StyledScrolledBar } from "../lib/styles"
const ScrolledHeader = ({ percent }) => {
  return (
    <StyledScrolledHeader>
      <StyledScrolledBar width={`${percent}%`}></StyledScrolledBar>
    </StyledScrolledHeader>
  )
}

export default ScrolledHeader
