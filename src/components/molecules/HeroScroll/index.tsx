import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Heading, Icon } from '@atoms'

const Wrapper = styled(motion.div) `
    display: flex;
    align-items: center;
    display:none;

    @media screen and (max-width: 590px) {
        display: none;
    }
`
const IconContainer = styled(motion.div) `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 100%;
`

const HeroScroll: FC = () => {
    return (
        <Wrapper whileHover={{cursor: 'pointer'}} onClick={() => {console.log('yoooo')}}>
            <Heading 
            level={3} 
            size="10px" 
            weight="800" 
            color="white"
            spacing="0.17rem"
            mr="10px"
            sizeTablet="12px"
            >
                Scroll Down
            </Heading>
            <IconContainer 
            animate={{
                y: [0, 5, 0],
            }} 

            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                repeatDelay: 0.2
      }}>
                <Icon icon="arrow" fontSize="20px"/>
            </IconContainer>
        </Wrapper>
    )
}

export default HeroScroll