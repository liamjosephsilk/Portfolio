import React from "react"
import Logo from "../components/Logo"
import {
  StyledHeader,
  StyledInfo,
  StyledSocialList,
  StyledSocialLink,
} from "../lib/styles"

const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <StyledInfo>
        Hi, I'm Liam Silk. A Front End Developer based in the UK. I am
        passionate about modern Front End technologies such as React, GraphQL as
        well as serverless and JAMstack.
      </StyledInfo>
      <StyledSocialList>
        <StyledSocialLink href="https://twitter.com">H</StyledSocialLink>
        <StyledSocialLink href="https://twitter.com">H</StyledSocialLink>
        <StyledSocialLink href="https://twitter.com">H</StyledSocialLink>
      </StyledSocialList>
    </StyledHeader>
  )
}
export default Header
