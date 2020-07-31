import React from "react"

import {
  StyledSection,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
} from "../lib/styles"

const Navigation = props => {
  return (
    <StyledSection>
      <StyledNav>
        <StyledList>
          <StyledLink to="/" activeStyle={{ color: "grey" }}>
            <StyledListItem>Blog</StyledListItem>
          </StyledLink>
          <StyledLink to="/reading" activeStyle={{ color: "grey" }}>
            <StyledListItem>Reading</StyledListItem>
          </StyledLink>
        </StyledList>
      </StyledNav>
    </StyledSection>
  )
}

export default Navigation
