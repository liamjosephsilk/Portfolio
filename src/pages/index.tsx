import React from "react"
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

const t = "liam";


const IndexPage = () => (
  <StaticQuery
    query={BlogListQuery}
    render={data => (
      <Layout>
        <SEO title="Liam Silk | | Blog" />
        <Hero />
      </Layout>
    )}
  />
)

export default IndexPage
