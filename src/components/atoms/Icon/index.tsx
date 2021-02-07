import React, { FC } from 'react'
import styled from 'styled-components'

type IconTypes = {
    icon: string,
    color?: string,
    fontSize?: string
}

const Wrapper = styled.span`
    display: inline-block;
    font-size: ${props => props.fontSize || '16px'};
    color: ${props => props.color || 'white'};
    width: 1em;
    height: 1em;
    margin: 0.1em;
    box-sizing: border-box;

    & > svg {
        width: 100%;
        height: 100%;
        fill: currentcolor;
        stroke: currentcolor;
    }
`

const Icon: FC<IconTypes> = ({ icon, color, fontSize }) => {
    const svg = require(`!raw-loader!./icons/${icon}.svg`)

    return <Wrapper color={color} fontSize={fontSize} dangerouslySetInnerHTML={{__html: svg}} />
}


export default Icon