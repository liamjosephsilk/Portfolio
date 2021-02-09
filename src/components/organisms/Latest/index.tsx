import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SectionContainer from '../../atoms/SectionContainer'
import LatestList from '../../molecules/LatestList'
import IconLink from '../../atoms/IconLink'

import { Article } from '../../molecules/LatestList'


const Wrapper = styled.section `
    background: #222222;
    color: white;
    padding: 50px 0;
`

const ArticlesWrapper = styled.div`
    grid-column-start: 10;
    grid-column-end: 13;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
`

const Latest: FC = () => {
    const articles: Article[] = [
        {
            title: 'title one',
            tag: 'React'
        },
        {
            title: 'title two',
            tag: 'Life'
        },
        {
            title: 'title three',
            tag: 'name'
        },
        {
            title: 'title 4',
            tag: 'Another'
        }
    ]
    return (
        <Wrapper>
            <LatestList articles={articles} />
            <SectionContainer>
                <ArticlesWrapper>
                    <IconLink icon="arrow" fontSize="12px" link="/articles" text="Latest Articles" />
                </ArticlesWrapper>
            </SectionContainer>
            
        </Wrapper>
    )
}

export default Latest