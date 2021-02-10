import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import { Layout } from '@layouts'
// import { SEO } from "@atoms"
import { Hero, Latest, Contact } from '@organisms'


const BlogListQuery = graphql`
  {
    graphcms {
      posts {
        id
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
      <Layout header={false}>
        {/* <SEO title="Liam Silk | | Blog" /> */}
        <Hero />
        <Latest data={data.graphcms.posts} />
        <Contact />
      </Layout>
    )}
  />
)

export default IndexPage
