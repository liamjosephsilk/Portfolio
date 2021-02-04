import React, { FC } from 'react'
import styled from 'styled-components'
import { OrganismType } from '../../../lib/types';

import Heading from '../../atoms/Heading/index'

const Wrapper = styled.div `
    height: ${props => props.height};
    grid-column-start: ${props => props.colStart || 1};
    grid-column-end: ${props => props.colEnd || 12};
    display: flex;
    justify-content: center;
    flex-direction: column;
`

type HeroCopyTypes<U> = {
    height?: string
} & U;

const HeroCopy: FC<HeroCopyTypes<OrganismType>> = ({colStart, colEnd, height}) => {
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
            size="60px" 
            weight="900" 
            color="white"
            spacing="0.15rem"
            line="60px"
            mt="20px;"
            
            >
                Crafting User Interfaces
            </Heading>
        </Wrapper>
    )
}

export default HeroCopy