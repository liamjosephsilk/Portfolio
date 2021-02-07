import React, { FC } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    background: white;
    height: 100%;
    width: 70%;
    z-index: 1000;
`

const Navigation: FC = () => {
    return (
        <Nav>
            <ul>
                <li>Nav</li>
            </ul>
        </Nav>
    )
}

export default Navigation