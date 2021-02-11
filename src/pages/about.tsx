import React, { FC } from 'react'
import { Layout } from '@layouts' 
import { Hero } from '@organisms'
import { HeroEnum } from '../lib/enums'

const AboutPage: FC = () => {
    return (
        <Layout header={true}>
            <Hero type={HeroEnum.AboutPage} backgroundColour="#222222" height="auto" mt="30px" />
        </Layout>
    )
}

export default AboutPage