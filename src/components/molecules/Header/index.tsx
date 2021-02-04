import React, { FC } from 'react'
import styled from 'styled-components'
import Logo from '../../atoms/Logo'
import { OrganismType } from '../../../lib/types'

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-start: ${props => props.colStart || 1};
    grid-column-end: ${props => props.colEnd || 12};
`

type HeaderTypes<U> = {
    
} & U;

const Header: FC<HeaderTypes<OrganismType>> = ({colStart, colEnd}) => {
    return (
        <Wrapper colStart={colStart} colEnd={colEnd}>
            <Logo content="ls" backgroundColour="#222222" textColour="#F2203E"/>
            <div>
                <span>menu icon</span>
            </div>
        </Wrapper>
    )
}

export default Header