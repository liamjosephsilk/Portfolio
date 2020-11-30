import React from "react"

import { StyledScrolledHeader, StyledScrolledHeaderTitle } from "../lib/styles"
const ScrolledHeader = ({ title }) => {
  return (
    <StyledScrolledHeader>
      <StyledScrolledHeaderTitle>
        {title}
        <div class="one two three">
          <h1>This is a h1</h1>
        </div>
      </StyledScrolledHeaderTitle>
    </StyledScrolledHeader>
  )
}

export default ScrolledHeader
