import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type SectionContainerTypes = {
    children?: ReactNode,
    rows?: string,
    gap?: string
}

const Container = styled.div `
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${props => props.gap || "0.5rem"};
    grid-template-rows: ${props => props.rows || "auto"};
`

const SectionContainer: FC<SectionContainerTypes> = ({children, rows, gap}) => {
    return (
        <Container rows={rows} gap={gap}>
            {children}
        </Container>
    )
}

export default SectionContainer