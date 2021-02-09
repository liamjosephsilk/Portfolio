import React, { FC } from 'react'
import styled from 'styled-components'
import SectionContainer from '../../atoms/SectionContainer/index'
import Header from '../../molecules/Header/index'
import HeroCopy from '../../molecules/HeroCopy/index'
import HeroAction from '../../molecules/HeroAction/index'



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