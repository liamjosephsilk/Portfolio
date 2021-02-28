import React, { FC } from 'react'
import styled from 'styled-components'
import { Heading, SectionContainer, Button } from '@atoms'

const Wrapper = styled.section`
    background: #F2203E;
    padding: 50px 0;
`

const ContentContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 13;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Contact: FC = () => {
    return (
        <Wrapper>
            <SectionContainer rows="100px 1fr">
                <ContentContainer>
                    <Heading 
                    level={3}
                    size="60px"
                    weight="900"
                    color="white"
                    spacing="0.15rem"
                    sizeMobile="30px"
                    sizeTablet="36px"
                    >
                        Want to Chat?
                    </Heading>
                </ContentContainer>
                <ContentContainer>
                    <Button overlayBackground="white" overlayColor="#F2203E" content="Lets talk"></Button>
                </ContentContainer> 
                
            </SectionContainer>
        </Wrapper>
    )
}

export default Contact