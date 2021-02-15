import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuContext } from '../../../context/Menu/MenuProvider'
import { MenuContextType } from '../../../lib/types'

type ButtonTypes = {
    content: string,
    overlayBackground: string,
    overlayColor: string
}

const StyledButton = styled(motion.button)`
    box-sizing: border-box;
    position: relative;
    border: 3px solid;
    border-color: white;
    max-width: 200px;
    padding: 14px 20px;
    background: none;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.13rem;
    max-height: 50px;
`

const ButtonContent = styled.p `
    position: relative;
    z-index: 1;
`

const ButtonOverlay = styled(motion.div)`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${props => props.background || '#222222'};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
`

const Button: FC<ButtonTypes> = ({ content, overlayBackground, overlayColor}) => {
    const [buttonOverlay, setButtonOverlay] = useState(false)
    

    return (
        <StyledButton 
            onMouseLeave={() => setButtonOverlay(false) } 
            onMouseEnter={() => setButtonOverlay(true)} 
            onClick={()=> console.log('clicked')}
            whileHover={{borderColor: overlayBackground, color: overlayColor, cursor: 'pointer' }} 
            transition={{duration: 0.3}}
            
            >
            
            <AnimatePresence>
                {buttonOverlay && (<ButtonOverlay background={overlayBackground} initial={{height: 0}} animate={{height: '100%'}} transition={{duration: 0.2}} exit={{height: 0}}></ButtonOverlay>) }
            </AnimatePresence>
            
            <ButtonContent>{content}</ButtonContent>
        </StyledButton>
    )
}

export default Button