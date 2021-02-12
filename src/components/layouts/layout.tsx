/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import styled from "styled-components"

// import { SEO } from '@atoms'
import { GlobalStyle } from "../../lib/globalstyles"
import { Menu, Footer } from '@organisms'
import { Header } from '@molecules'
import { SectionContainer } from "@atoms"
import MenuProvider from "../../context/Menu/MenuProvider"

type LayoutProps = {
  header: boolean
}


const Layout: FC<LayoutProps> = ({ children, header = false }) => {
  return (
    <MenuProvider>
      {header && 
      <SectionContainer>
        <Header pt="30px" logoBackground="#F2203E" logoColor="white" />
      </SectionContainer>
        }
      {/* <SEO title="Liam Silk" /> */}
      <GlobalStyle />
      <Menu />
      <main>{children}</main>
      <Footer />
    </MenuProvider>
  )
}

export default Layout
