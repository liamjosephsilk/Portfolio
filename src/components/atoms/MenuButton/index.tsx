import React, { FC, useState, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { MenuContext } from '../../../context/Menu/MenuProvider'

import ButtonItem from './buttonItem'

const StyledButton = styled(motion.button)`
    border: none;
    background: inherit;
    width: 30px;
    height: 30px;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`

const variants = {
    open: {
        transitions: {staggerChildren: 1, delayChildren: 0.2}
    },
    close: {
        transitions: {staggerChildren: 1, delayChildren: 0.4}
    }
}

const MenuButton: FC = () => {
    const items = [1, 2, 3];
    const [hover, setHover] = useState(false)
    const { open, setOpen } = useContext(MenuContext)
    return (
        <StyledButton 
            onMouseEnter={() => {setHover(true)}} 
            onMouseLeave={() => {setHover(false)}}
            onClick={() => setOpen(!open)}
            animate={hover ? "open" : "close"}
            variants={variants}
            whileHover={{cursor: 'pointer'}}
            >
            {items.map((i) => (
                <ButtonItem key={i} item={i}/>
            ))}
        </StyledButton>
    )
}

export default MenuButton