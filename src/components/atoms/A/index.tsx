import React, { FC } from 'react'
import styled from 'styled-components'


const StyledA = styled.a`
    text-decoration: none;
    color: #F2203E;
    font-weight: 700;
    font-style: italic;
`

const A: FC = () => {
    return <StyledA></StyledA>
}

export default A