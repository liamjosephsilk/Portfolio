import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Navigation } from '@molecules'

import { MenuContext } from '../../../context/Menu/MenuProvider'

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    z-index: 1000;
`

const Overlay = styled(motion.div)`
    background: white;
`

const variants = {
    open: {
        x: 0,  
    },
    close: {
        x: 2000,
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.4
        }
    }
}

const transition = {
    type: "tween",
    duration: 0.4,
    ease: "easeInOut"
}

const Menu: FC = () => {
    const { open } = useContext(MenuContext)

    return(
        <Wrapper animate={open ? "open" : "close"} variants={variants} transition={transition} initial={false}>  
            <Navigation  />     
        </Wrapper> 
    )
}

export default Menu