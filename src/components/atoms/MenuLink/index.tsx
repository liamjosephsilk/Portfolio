import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type MenuLinkTypes = {
    name: string,
    link: string,
    index: number
}

const StyledLink = styled(Link)`
    color: #F2203E;
    font-weight: 900;
    font-size: 60px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.2rem;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #222222;
    }
`

const Wrapper = styled(motion.div) `
    margin: 5px 0;
`

const variants = {
    open: (key: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: key * 0.1
            }
        }),
    close: (key: number) => ({
            opacity: 0,
            y: -80,
            transition: {
                delay: key * 0.1
            }
        })
}

const MenuLink: FC<MenuLinkTypes> = ({ name, link, index }) => {
    return (
        <Wrapper variants={variants} custom={index}>
            <StyledLink to={link} activeStyle={{ opacity: 0.6 }}>{name}</StyledLink>
        </Wrapper>
        
    )
}

export default MenuLink