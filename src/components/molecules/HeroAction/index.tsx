import React, { FC } from 'react'
import styled from 'styled-components'
import {OrganismType} from '../../../lib/types'

type HeroCopyTypes<U> = {
    height?: string
} & U;

const Wrapper = styled.div`
    grid-column-start: ${props => props.colStart || 1};
    grid-column-end: ${props => props.colEnd || 12};
    display: flex;
    justify-content: space-between;
`

const HeroAction: FC<HeroCopyTypes<OrganismType>> = ({colStart, colEnd}) => {
    return (
        <Wrapper colStart={colStart} colEnd={colEnd}>
            <span>One</span>
            <span>Two</span>
        </Wrapper>
    )
}

export default HeroAction