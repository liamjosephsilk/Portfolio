import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import { MenuContext } from '../../../context/Menu/MenuProvider'

const Button = styled(motion.button)`
    height: 50px;
    width: 50px;
    background: none;
    border: none;

    &:focus {
        outline: none;
    }
`

const Item = styled(motion.span) `
    display: block;
    height: 3px;
    width: 30px;
    background: black;
    position: absolute;
    outline: none;
`

const variants1 = {
    open: (i) => ({
        rotate: 135,
        opacity: 1,
        transition: {delay: 0.5}
    }),
    close: (i) => ({
        rotate: 0,
        opacity: 0,
    })
}

const variants2 = {
    open: (i) => ({
        rotate: 45,
        opacity: 1,
        transition: {delay: 0.5}
    }),
    close: (i) => ({
        rotate: 0,
        opacity: 0,
    })
}

const CloseButton: FC = () => {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <Button onClick={() => setOpen(!open)} whileHover={{cursor: "pointer"}}>
        <Item variants={variants1}/>
        <Item variants={variants2}/>   
        </Button>
    )
}

export default CloseButton