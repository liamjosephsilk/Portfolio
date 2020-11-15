import React from "react"
import { StyledHeader } from "../lib/styles"

import Navigation from "./Navigation"
import Heading from "./Heading"

const Header = () => {
  return (
    <StyledHeader>
      <Heading />
      <Navigation />
    </StyledHeader>
  )
}
export default Header
