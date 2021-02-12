import React, { FC } from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    margin: 30px auto;
`

const P: FC = ({ children }) => {
    return <StyledP>{children}</StyledP>
}

export default P