import React, { FC } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Item = styled(motion.span)`
    display: block;
    height: 3px;
    width: 30px;
    background: #222;
    margin-bottom: 5px;
    border-radius: 40px;
    text-align: right;
`

const variants = {
    open: (i: number) => ({
            width: `${i * 30}%`,
            transition: {
                delay: i * 0.1
            }
        }),
        close: (i: number) => ({
            width: "100%",
            transition: {
                delay: i * 0.05
            }
        })
}

type ButtonItemTypes = {
    item: number
}

const ButtonItem: FC<ButtonItemTypes> = ({ item }) => {
    return <Item variants={variants} 
    custom={item}></Item>
}

export default ButtonItem