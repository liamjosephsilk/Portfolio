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
          <StyledLink to="/" activeClassName="active">
            <StyledListItem>Home</StyledListItem>
          </StyledLink>
          <StyledLink to="/about" activeClassName="active">
            <StyledListItem>About</StyledListItem>
          </StyledLink>
          <StyledLink to="/articles" activeClassName="active">
            <StyledListItem>Articles</StyledListItem>
          </StyledLink>
          <StyledLink to="/reading" activeClassName="active">
            <StyledListItem>Reading</StyledListItem>
          </StyledLink>
        </StyledList>
      </StyledNav>
    </StyledSection>
  )
}

export default Navigation
