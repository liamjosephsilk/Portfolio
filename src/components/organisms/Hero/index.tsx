import React, { FC } from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@atoms'
import { Header, HeroCopy, HeroAction } from '@molecules'

const Wrapper = styled.section`
    background: ${props => props.backgroundColour || "#F2203E"};
    height: 100vh;
    padding: 50px 0;
`

type HeroTypes = {
    backgroundColour?: string
}

const Hero: FC<HeroTypes> = ({ backgroundColour }) => {
    return (
        <Wrapper backgroundColour={backgroundColour}>
            <SectionContainer rows="auto 4fr auto">
                <Header />
                <HeroCopy colEnd={8}/>
                <HeroAction />
            </SectionContainer>       
        </Wrapper>
    )
}

export default Hero