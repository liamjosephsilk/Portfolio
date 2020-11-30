import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { IndexWrapper, Title, SubTitle } from "../lib/styles"

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
const IndexPage = () => (
  <StaticQuery
    query={BlogListQuery}
    render={data => (
      <Layout>
        <SEO title="Liam Silk | | Blog" />
        <IndexWrapper>
          <Title>Hello, I’m a Front end developer. </Title>
          <SubTitle fontSize="1.1rem" fontFamily="IBM Plex Mono">
            I build interfaces using modern front end web technologies.
          </SubTitle>
        </IndexWrapper>
      </Layout>
    )}
  />
)

export default IndexPage
