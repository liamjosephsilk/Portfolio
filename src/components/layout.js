/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import styled from "styled-components"

import SEO from "./seo.js"
import { GlobalStyle } from "../lib/globalstyles"
import Menu from "../components/organisms/Menu/index"
import MenuProvider from "../context/Menu/MenuProvider"

const Wrapper = styled.div``

const Layout = ({ children }) => {
  return (
    <MenuProvider>
      <Wrapper>
        <SEO title="Liam Silk" />
        <GlobalStyle />
        <Menu />
        <main>{children}</main>
      </Wrapper>
    </MenuProvider>
  )
}

export default Layout
