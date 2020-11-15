/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "typeface-poppins"
import "typeface-ibm-plex-sans"

import Header from "./header"
import SEO from "./seo.js"
import { GlobalStyle, StyledLayout, StyledMain } from "../lib/styles"

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <SEO title="Liam Silk" />
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
