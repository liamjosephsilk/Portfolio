import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import MDXWrapProvider from '../context/MDX/MDXWrapProvider'
import { Heading } from '@atoms'

const Wrapper = styled.article`
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;

    @media screen and (max-width: 760px) {
      width: 90%;
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }

    @media screen and (min-width: 1900px) {
        width: 40%;
    }
`

const ArticlePage: FC = ({ data }) => {
    const {
        body, 
        frontmatter: { title }
    } = data.mdx

    return (
        <>
            <MDXWrapProvider>
                <Wrapper>
                    <Heading weight="900" size="30px" line="1.3" color="#F2203E">{title}</Heading>
                    <MDXRenderer>{body}</MDXRenderer>
                </Wrapper>
            </MDXWrapProvider> 
        </>
    )
}

export default ArticlePage

export const query = graphql`
  query PostBySlug($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        title
      }
    }
  }
`