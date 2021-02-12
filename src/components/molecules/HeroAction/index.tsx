import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import {OrganismType} from '../../../lib/types'
import { Button } from '@atoms'
import { HeroScroll } from '@molecules'

type HeroCopyTypes<U> = {
    height?: string
} & U;

const Wrapper = styled.div`
    grid-column-start: ${props => props.colStart || 1};
    grid-column-end: ${props => props.colEnd || 13};
    display: flex;
    justify-content: space-between;
`

const HeroAction: FC<HeroCopyTypes<OrganismType>> = ({colStart, colEnd}) => {
   return (
        <Wrapper colStart={colStart} colEnd={colEnd}>
            <Button overlayBackground="#222222" overlayColor="#F2203E" content="Get in Touch" />
            <HeroScroll />
        </Wrapper>
    )
}

export default HeroAction