import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Icon from '../Icon'
import Heading from '../Heading'

type IconLinkProps = {
    icon: string,
    fontSize?: string,
    link: string,
    text: string
}

const Wrapper = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    transition: all ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        color: white;
    }
`

const IconLink: FC<IconLinkProps> = ({ icon, fontSize, link, text }) => {
    return (
        <Wrapper to={link}>
            <Heading  
                level={3} 
                size="12px" 
                weight="800" 
                color="white"
                spacing="0.17rem"
                mr="15px" >
                    {text}
            </Heading>
            <Icon icon={icon} fontSize={fontSize} />
        </Wrapper>
    )
}

export default IconLink