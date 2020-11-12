import React from "react"
import Layout from "../components/layout"
import LinkButton from "../components/LinkButton"

import { AboutWrapper, Title, SubTitle, PageCopy } from "../lib/styles"

const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <Title>About Me</Title>
        <SubTitle
          fontSize="1.1rem"
          fontFamily="IBM Plex Mono"
          marginBottom="2rem"
        >
          A Little About me.
        </SubTitle>
        <PageCopy color="#7E7E7E">
          Hi there!, I'm Liam and this is my little slice of the web.
        </PageCopy>
        <PageCopy color="#7E7E7E">
          I am a Front End Developer building modern user interfaces and front
          end heavy websites and applications. Focusing on building Jamstack
          architectures, fast, scalable and secure products.
        </PageCopy>
        <PageCopy color="#7E7E7E">
          The technologies I use are React, (Gatsby and Next.js), GraphQl and
          serverless.
        </PageCopy>
        <PageCopy color="#7E7E7E">
          I am based in East Yorkshire and currently work as a Front End
          Developer at a well known retailer.
        </PageCopy>
        <LinkButton to="/" text="Get In Touch" hover="#858de1" />
      </AboutWrapper>
    </Layout>
  )
}

export default About
