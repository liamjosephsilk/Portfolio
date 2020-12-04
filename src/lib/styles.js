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
  letter-spacing: 0.03rem;
  font-size: 1rem;
  font-weight: 400;
  color: #4A5568;
  margin-bottom: 1rem;
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
  font-size: 1.9rem;
    font-weight: 700;
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
  font-size: 1rem;
  color: #4A5568;
  text-decoration: none;
  font-style: italic;
  font-weight: 600;
  color: #5863D8;

}

a:hover {
  color: #858de1;
}

ul {
  list-style: disc;
  margin: 1rem 0;
}

.active li {
  color: #5863D8;
}

li {
  letter-spacing: 0.03rem;
  font-size: 1rem;
  color: #4A5568;
  font-weight: 400;
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
  max-width: 100%;
  line-height: 4rem;
  text-align: center;
  font-family: ${props => props.fontFamily || "inherit"};

  ${media.desktop`
    width: 60%;
  `}

  ${media.laptop`
    width: 30%;
  `}

  ${media.smLaptop`
    width: 65%;
    `}

  ${media.tablet`
    width: 95%;
  `}

  ${media.mobile`
    font-size: 2rem;
    width: 100%;
    line-height: 2.5rem;
  `} 
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
  margin-bottom: ${props => props.marginBottom || 0};

  ${media.desktop`
    width: 60%;
  `}

  ${media.laptop`
    width: 30%;
  `}

  ${media.smLaptop`
    width: 50%;
    `}

  ${media.tablet`
    width: 95%;
  `}

  ${media.mobile`
    width: 100%;
  `} 
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
    width: 100%;
    flex-direction: column;
  `}

  ${media.mobile`
    flex-direction: column;
    width: 100%;
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

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;

  ${media.tablet`
    margin-top: 1.5rem;
  `}

  ${media.mobile`
      padding-bottom: 2rem;
  `}
`

export const ArticlesIndexWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
`

export const PageCopy = styled.p`
  font-family: "Poppins";
  font-size: 1.1rem;
  font-weight: 400;
  width: 50%;
  line-height: 1.8;
  color: ${props => props.color || "inherit"};

  ${media.desktop`
    width: 30%;
  `}

  ${media.laptop`
    width: 50%;
  `}

  ${media.smLaptop`
    width: 70%;
    `}

  ${media.tablet`
    width: 95%;
  `}

  ${media.mobile`
    width: 100%;
  `} 
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
  align-items: center;
  ${media.smLaptop`
    padding-right: 2rem;
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
  padding: 1rem;
  transition: background 400ms ease-in-out;
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  ${media.desktop`
      width: 30%;
  `}

  ${media.laptop`
    width: 50%;
  `}

  ${media.smLaptop`
    width: 70%;
    `}

  ${media.tablet`
    width: 95%;
  `}

  ${media.mobile`
    width: 100%;
  `}
`

export const StyledCardLink = styled(Link)`
  font-size: 1rem;
  color: #5863d8;
  text-decoration: none;
  font-family: "Poppins";
  transition: color 300ms ease-in-out;
  font-weight: 500;
  font-style: normal;

  &:hover {
    color: #858de1;
  }
`

export const StyledBreak = styled.div`
  height: 2px;
  background: ${props => props.color || "black"};
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
`

export const StyledBreakSpan = styled.span`
  height: 2px;
  width: 10%;
  background: ${props => props.color || "black"};
  position: absolute;
  left: 0;
`
export const StyledCardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  width: 80%;

  ${media.smLaptop`
    width: 90%;
    font-size: 1.4rem;
  `}
  ${media.tablet`
    font-size: 1.3rem;
    width: 95%;
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
  font-style: normal;
  color: #202123;
  font-weight: 500;
  letter-spacing: 0.07rem;

  &.active {
    color: blue;
  }
`

export const StyleLinkActive = styled.div`
  height: 5px;
  width: 5px;
  background: black;
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

  ${media.smLaptop`
    width: 75%;
  `}
  ${media.tablet`
    width: 90%;
  `}
`

export const ArticleTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 3rem;
  margin-top: 1rem;
  font-size: 2.1rem;
`

export const StyledButton = styled.button`
  margin-top: 2rem;
  border: none;
  background: #5863d8;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  transition: background 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    background: #858de1;
  }
`

export const StyledButtonLink = styled(Link)`
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  font-family: "Poppins";
  font-style: normal;

  &:hover {
    color: white;
  }
`

export const StyledBlogFooter = styled.footer`
  display: flex;
  height: 100px;
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0;
  border-radius: 3px;
  padding: 1rem;
`

export const StyledFooterCopy = styled.p`
  font-family: "IBM Plex Mono";
  color: black;
  margin: 0 0.1rem 0 0;
  text-align: center;
  line-height: 1.6;
`

export const StyledFooterLink = styled.a``

export const StyledScrolledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(8px);
  padding: 1.5rem 0;
`

export const StyledScrolledHeaderTitle = styled.h3`
  font-weight: 500;
  font-size: 0.9rem;
  width: 40%;
  text-align: center;
`
