import React, { FC } from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@atoms'
import { Header, HeroCopy, HeroAction, AboutCopy } from '@molecules'
import { HeroEnum } from '../../../lib/enums'


const Wrapper = styled.section`
    background: ${props => props.backgroundColour || "#F2203E"};
    height: ${ props => props.height ||"100vh"};
    padding: 50px 0;
    margin-top: ${props => props.mt || 0};
`

type HeroTypes = {
    backgroundColour?: string,
    height?: string,
    mt?: string,
    type: HeroEnum
}

const Hero: FC<HeroTypes> = ({ backgroundColour, type, height, mt }) => {
    return (
        <Wrapper backgroundColour={backgroundColour} height={height} mt={mt}> 
            {type === "INDEX" &&
                <SectionContainer rows="auto 4fr auto">
                    <Header />
                    <HeroCopy colEnd={8}/>
                    <HeroAction />
                </SectionContainer>

            } 
            {type === "ABOUT" && 
                <SectionContainer gap="50px" rows="70vh">
                    <AboutCopy />
                </SectionContainer>
            }  
        </Wrapper>
    )
}

export default Hero