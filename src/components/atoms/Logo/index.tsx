import React, { FC } from 'react'
import styled from 'styled-components'

// Styled Components

const Wrapper = styled.div`
    background: ${props => props.backgroundColour};
    height: ${props => props.height || '50px'};
    width: ${props => props.width || '50px'};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.span`
    text-transform: uppercase;
    color: ${props => props.textColour};
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 0.15rem;
`

// Prop Types

type LogoProps = {
    content: string,
    backgroundColour?: string,
    textColour?: string,
    width?: string,
    height?: string
}

const Logo: FC<LogoProps> = ({content, backgroundColour, textColour}) => {
    return (
        <Wrapper backgroundColour={backgroundColour}>
            <Content textColour={textColour}>{content}</Content>
        </Wrapper>
    )
}

export default Logo
