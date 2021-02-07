import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/organisms/Hero'


const BlogListQuery = graphql`
  {
    graphcms {
      posts {
        bodyMarkdown
        id
        publishDate
        slug
        title
        tag
      }
    }
  }
`

const NextSection = styled.section `
  height: 2000px;
`
const IndexPage = () => (
  <StaticQuery
    query={BlogListQuery}
    render={data => (
      <Layout>
        <SEO title="Liam Silk | | Blog" />
        <Hero />
        <NextSection>
          <p>next section</p>
        </NextSection>
      </Layout>
    )}
  />
)

export default IndexPage
