import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/organisms/Hero'
import Latest from '../components/organisms/Latest'


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
        <Hero />
        <Latest />
      </Layout>
    )}
  />
)

export default IndexPage
