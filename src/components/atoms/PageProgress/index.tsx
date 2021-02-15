import React, { FC } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

type PageProgressProps = {
    scrollPercentage: number
}


const ScrollProgress = styled(motion.div)`
    height: 5px;
    background: #F2203E;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
`
const PageProgress: FC<PageProgressProps> = ({ scrollPercentage }) => {
    
    return (
        <ScrollProgress width={`${scrollPercentage}%`} animate={{width: `${scrollPercentage}%`}}>
        </ScrollProgress>
    )
}

export default PageProgress