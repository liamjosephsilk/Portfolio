/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import SEO from "./seo.js"
import { GlobalStyle } from "../lib/globalstyles"

const Wrapper = styled.div``

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <SEO title="Liam Silk" />
      <GlobalStyle />
      <main>{children}</main>
    </Wrapper>
  )
}

export default Layout
