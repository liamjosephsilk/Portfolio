import React from "react"
import Logo from "../components/Logo"
import {
  StyledHeader,
  StyledInfo,
  StyledSocialList,
  StyledSocialLink,
} from "../lib/styles"

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
