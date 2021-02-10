import React, { FC } from 'react'
import styled from 'styled-components'

import { SectionContainer, IconLink } from '@atoms'
import { LatestList } from '@molecules'
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

type LatestProps = {
    data: []
}

const Latest: FC<LatestProps> = ({ data }) => {
    return (
        <Wrapper>
            <LatestList articles={data} />
            <SectionContainer>
                <ArticlesWrapper>
                    <IconLink icon="arrow" fontSize="12px" link="/articles" text="View All Articles" />
                </ArticlesWrapper>
            </SectionContainer>
            
        </Wrapper>
    )
}

export default Latest