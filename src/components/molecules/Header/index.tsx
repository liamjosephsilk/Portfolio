import React, { FC } from 'react'
import styled from 'styled-components'
import { MenuButton, Logo } from '@atoms'
import { OrganismType } from '../../../lib/types'

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-start: ${props => props.colStart || 1};
    grid-column-end: ${props => props.colEnd || 13};
    padding-top: ${props => props.pt || 0}
`

type HeaderTypes<U> = {
    pt: string,
    logoBackground: string,
    logoColor: string
} & U;

const Header: FC<HeaderTypes<OrganismType>> = ({colStart, colEnd, pt, logoBackground = "#222222", logoColor = "#F2203E"}) => {
    return (
        <Wrapper colStart={colStart} colEnd={colEnd} pt={pt}>
            <Logo content="ls" backgroundColour={logoBackground} textColour={logoColor}/>
            <MenuButton />
        </Wrapper>
    )
}

export default Header