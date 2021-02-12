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

    @media screen and (max-width: 760px) {
        width: 90%;
        grid-gap: ${props => props.gapMobile || "0.5rem"};
        grid-template-rows: ${props => props.rowsMobile || "auto"};
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }

    @media screen and (min-width: 1900px) {
        width: 40%;
    }
`

const SectionContainer: FC<SectionContainerTypes> = ({children, rows, gap}) => {
    return (
        <Container rows={rows} gap={gap}>
            {children}
        </Container>
    )
}

export default SectionContainer