import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { pageRoutes } from '../../../lib/pageRoutes'
import { MenuLink, CloseButton, Logo} from '@atoms'


const Nav = styled.nav`
    background: white;
    height: 100%;
    width: 100%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Heading = styled.header`
    position: absolute;
    top: 30px;
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
`

const LogoWrapper = styled(motion.div) `
    display: block;
`

const LinkList = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const variants = {
    open: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            delay: 0.1
        }
    },
    close: {
        opacity: 0,
        transition: {
            delay: 0.5
        }
    }
}

const LogoVariants = {
    open: {
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }, 
    close: {
        opacity: 0,
        transition: 
        {
            delay: 0.2
        }
    }
}

const Navigation: FC = () => {
    return (
        <Nav>
            <Heading>
                <LogoWrapper variants={LogoVariants}>
                    <Logo content="LS" backgroundColour="#F2203E" textColour="white" />
                </LogoWrapper>
                <CloseButton />
            </Heading>
            <LinkList variants={variants}>
                {pageRoutes.links.map(({ name, path}, i) => (
                    <MenuLink key={i} name={name} index={i} link={path} />
                ))}
            </LinkList>        
        </Nav>
    )
}

export default Navigation