import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import Navigation from '../../molecules/Navigation/index'

import { MenuContext } from '../../../context/Menu/MenuProvider'

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
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
    }
}

const transition = {
    type: "tween",
    duration: 0.3,
    ease: "easeInOut"
}

const childVariants = {
    open: {
        width: "30%",
        transition: {delay: 0.3}
    },
    close: {
        width: 0
    }
}



const Menu: FC = () => {
    const { open, setOpen } = useContext(MenuContext)
    return(
        <Wrapper animate={open ? "open" : "close"} variants={variants} transition={transition} initial={false}>
            <Overlay variants={childVariants}>hello</Overlay>
            <Navigation />
            
        </Wrapper> 
    )
}

export default Menu