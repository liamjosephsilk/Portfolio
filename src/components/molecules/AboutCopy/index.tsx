import React, { FC } from 'react'
import styled from 'styled-components'
import { Heading, Paragraph } from '@atoms'

const Wrapper = styled.div`
    grid-column-end: span 7;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 760px) {
        grid-column-end: span 12;
    }

    @media screen and (max-width: 1200px)
    {
       grid-column-end: span 10; 
    }
`

const ImageWrapper = styled.div`
    display: none;
    grid-column-end: span 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 760px) {
        grid-column-end: span 1;
        height: 300px;
        display: none;
    }
`
const Image = styled.div`
    height: 400px;
    background: yellow;
    display: none;
`

const AboutCopy: FC = () => {
    return (
        <>
            <Wrapper>
                <Heading level={2} size="14px" weight="900" color="white">Hull, Uk</Heading>
                <Heading level={1} size="36px" weight="900" color="white" mt="20px" line="1.4" spacing="2px">Creative Front End Developer</Heading>
                <Paragraph color="white" >Building modern user interfaces and applications. Focusing on building Jamstack architectures which are fast, scalable and secure.</Paragraph>
                <Paragraph color="white">The technologies I use are React, (Gatsby and Next.js), GraphQl and serverless.</Paragraph>
            </Wrapper>
            <ImageWrapper >
                <Image>image place holder</Image>
            </ImageWrapper>
        </>
    )
}

export default AboutCopy