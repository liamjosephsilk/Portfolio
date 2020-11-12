import styled, { createGlobalStyle } from "styled-components"
import media from "./media"
import { Link } from "gatsby"

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: #fff;
    font-family: "Poppins";
    color: white;
    height: 100vh;
    width: 100vw;
    padding: 2rem;
    color: #202123;
}
p {
  letter-spacing: 0.04rem;
  font-size: 1.125rem;
  font-weight: 300;
}

article {
  line-height: 1.9;

}

h1 {
  font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0.03rem;

}
h2 {
  font-size: 2.1rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.03rem;
    margin: 1rem 0;
}
h3 {
  font-size: 2.1rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.03rem;
}

a {
  font-size: 2.1rem;
  color: white;
  text-decoration: underline;

}

a:hover {
  color: grey;
}

ul {
  list-style: disc;
}

.active li {
  color: #5863D8;
}

li {
  letter-spacing: 0.04rem;
  font-size: 1.125rem;
  color: #eee;  
  font-weight: 300;
  list-style:   disc; 
}




@media screen and (max-width: 425px) {
  body {
    overflow: scroll;
  }
}
@media screen and (max-width: 700px) {
  body {
    overflow: scroll;
  }
}

`

export const Title = styled.h1`
  font-size: ${props => props.fontSize || "3rem"};
  font-weight: 700;
  width: 30%;
  line-height: 4rem;
  text-align: center;
  font-family: ${props => props.fontFamily || "inherit"};
`

export const SubTitle = styled.h2`
  font-size: ${props => props.fontSize || "3rem"};
  font-weight: 700;
  width: 30%;
  margin-top: -0.2rem;
  line-height: 2rem;
  text-align: center;
  font-weight: 400;
  color: #7e7e7e;
  font-family: ${props => props.fontFamily || "inherit"};
`

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  

  ${media.desktop`
    width: 100%;
  `}
  ${media.laptop`
    width: 100%;
    align-items: center;
    `}

  ${media.tablet`
    width: 85%;
    margin: 0 auto;
    flex-direction: column;
  `}

  ${media.mobile`
    flex-direction: column;
    width: 95%;
  `}
`

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`
export const IndexWrapper = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledHeading = styled.h3`
  font-size: 1rem;
`

export const StyledSpan = styled.span`
  font-weight: 200;
`
export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.smLaptop`
    padding-right: 2rem;
  `}

  ${media.mobile &&
  media.tablet`
    width: 100%;
    padding-right: 0;
    height: 40vh;

    margin-bottom: 2rem;

  `}
`

export const StyledInfo = styled.p`
  font-size: 1.5rem;
  color: grey;
  line-height: 2;
  width: 30%;
  height: fit-content;

  ${media.smLaptop`
    font-size: 1.4rem;
    line-height: 1.5
  `}
  ${media.tablet`
    font-size: 1.3rem;
    padding: 0 1rem;
    `}
  ${media.mobile`
    line-height: 1.4;
    font-size: 1.1rem;
    padding: 0 0.5rem;

  `}
`

export const StyledSocialList = styled.div`
  display: flex;
  width: 20%;

  justify-content: space-between;
`

export const StyledSocialLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background 300ms ease-in-out;
  :hover {
    background: #202022;
    cursor: pointer;
  }
`

export const StyledCard = styled.div`
  padding: 2rem;
  transition: background 400ms ease-in-out;
  color: black;
  overflow: hidden;
  align-self: stretch;
  justify-self: stretch;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  :hover {
    background: #202022;
    cursor: pointer;
    color: #fff;
  }

  ${media.mobile &&
  media.tablet`
    padding: 1rem 0.5rem;
  `}
`
export const StyledCardTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;

  ${media.mobile`
    font-size: 1.5rem;
  `}
`

export const StyledTagGroup = styled.div`
  display: flex;
`

export const StyledTag = styled.div`
  background: grey;
  color: black;
  padding: 0.15rem;
  width: fit-content;
  margin-bottom: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-right: 1rem;
`

export const StyledDesc = styled.p`
  color: grey;
  margin-top: 1rem;
  font-weight: 300;
`

export const StyledSection = styled.section`
  width: 30%;
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

export const StyledList = styled.ul`
  display: flex;
`

export const StyledListItem = styled.li`
  display: flex;
  transition: background 300ms ease-in-out;
  font-size: 0.8rem;
  font-weight: 500;
  color: #bdbdbd;
  margin-right: 1rem;

  :hover {
    cursor: pointer;
    color: #5863d8;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #202123;
  font-weight: 500;
  letter-spacing: 0.07rem;

  &.active {
    color: blue;
  }
`

export const StyledLogoBox = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  background: #202123;
  letter-spacing: 0.03rem;
  width: fit-content;
  padding: 10rem;
  color: #fff;
  transition: background 300ms ease-in-out;
  :hover {
    background: #fff;
    color: #202123;
    cursor: pointer;
  }

  ${media.mobile`
    padding: 0.5rem;
    margin-bottom: 1rem;
  `}
`

export const StyledArticle = styled.article`
  width: 50%;
  margin: 0 auto;
  height: 90vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  ${media.tablet`
    width: 90%;
  `}
`
