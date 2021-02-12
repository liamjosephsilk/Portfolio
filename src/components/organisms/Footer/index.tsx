import React, { FC } from 'react'
import styled from 'styled-components'
import { Heading, SectionContainer, Logo, Icon } from '@atoms'
import { Link } from 'gatsby'
import { getYear } from "@utils"

const Wrapper = styled.footer`
    padding: 50px 0;
    color: #222222;
`

const ContentContainer = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 13;
    display: flex;
    justify-content: space-between;
`
const CopyRight = styled.div`
    grid-column-start: 1;
    grid-column-end: 13;
    display: flex;
    align-items: flex-end;

    && p {
        font-size: 12px;
        color: #F2203E
    }
`
const Container = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 760px) {
        align-items: flex-end;
    }
`
const ListContainer = styled.ul`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    margin-bottom: 30px;

    && li {
        list-style: none;
        font-size: 14px;
        margin-bottom: 6px;
        font-weight: 500;
    }

    && a {
        margin-right: 10px;
    }
`
const FooterLink = styled(Link)`
    text-decoration: none;
    color: #F2203E;
`
const Footer: FC = () => {
    return (
        <Wrapper>
            <SectionContainer rows="200px 20px">
                <ContentContainer> 
                    <Logo content="LS" backgroundColour="#F2203E" textColour="white"/>
                    <Container>
                        <Heading level={4} size="12px" color="#F2203E" weight="900" mb="20px">Liam Silk</Heading>
                        <ListContainer>
                            <li><FooterLink to="/">Home</FooterLink></li>
                            <li><FooterLink to="/about">About</FooterLink></li>
                            <li><FooterLink to="/articles">Articles</FooterLink></li>
                        </ListContainer>
                        <ListContainer direction="row">
                            <li>
                                <a href="https://github.com/liamjosephsilk">
                                    <Icon icon="github" color="#F2203E" fontSize="20px"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/liam_silk">
                                    <Icon icon="twitter" color="#F2203E" fontSize="20px"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/liam-silk-11907b157/">
                                     <Icon icon="linkedin" fontSize="20px" color="#F2203E" />  
                                 </a>        
                            </li>
                        </ListContainer>
                    </Container>
                </ContentContainer>
                <CopyRight>
                        <p> &#169; {getYear(new Date())} Liam Silk built with Gatbsy and MDX</p>
                    </CopyRight>
            </SectionContainer>
        </Wrapper>
    )
    
}

export default Footer