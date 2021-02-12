import React, { FC } from 'react'
import styled from 'styled-components'
import { OrganismType } from '../../../lib/types';

import { Heading } from '@atoms'

const Wrapper = styled.div `
    height: ${props => props.height};
    grid-column-start: ${props => props.colStart || 1};
    grid-column-end: ${props => props.colEnd || 12};
    display: flex;
    justify-content: center;
    flex-direction: column;
`

type HeroCopyTypes<U> = {
    height?: string,
    textSize: string,
} & U;

// TODO: Text size of heading is causing responsive bug. Fixx at a later date when Making Thinkgs responsive.

const HeroCopy: FC<HeroCopyTypes<OrganismType>> = ({ colStart, colEnd, height, textSize }) => {
    return (
        <Wrapper colStart={colStart} colEnd={colEnd} height={height}>
            <Heading 
            level={2} 
            size="22px" 
            weight="900" 
            color="white"
            spacing="0.15rem"
            >
                Liam Silk
            </Heading>
            <Heading 
            level={1} 
            size="100px" 
            weight="900" 
            color="white"
            spacing="0.15rem"
            line="100px"
            mt="20px;"
            sizeMobile="40px"
            lineMobile="42px"
            sizeTablet="64px"
            lineTablet="68px"
            
            >
                Crafting User Interfaces
            </Heading>
        </Wrapper>
    )
}

export default HeroCopy