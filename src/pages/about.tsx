import React, { FC } from 'react'
import { Layout } from '@layouts' 
import { SEO } from '@atoms'
import { Hero } from '@organisms'
import { HeroEnum } from '../lib/enums'

const AboutPage: FC = () => {
    return (
        <Layout header={true}>
            <SEO title="Liam Silk | About Me" description="Learn about Liam Silk and what technologies he uses as well as his Front End development passions."/>
            <Hero type={HeroEnum.AboutPage} backgroundColour="#222222" height="auto" mt="30px" />
        </Layout>
    )
}

export default AboutPage