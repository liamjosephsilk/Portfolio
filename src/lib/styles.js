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
    background: #151515;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    height: 100vh;
    overflow-y: hidden;
    padding: 2rem 0;
}
p {
  margin-bottom: 2rem;
  letter-spacing: 0.04rem;
  font-size: 1.125rem;
  color: #eee;  
  font-weight: 300;
}

article {
  line-height: 1.9;

}

h1 {
  font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.03rem;
    margin: 1rem 0;

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
    margin: 1rem 0;
}

a {
  color: white;
  text-decoration: underline;

}

a:hover {
  color: grey;
}

ul {
  margin: 2rem 0;
  list-style: disc;
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
  font-size: ${props => props.fontSize || "4rem"};
  font-weight: 500;
  margin-bottom: 2rem;
`

export const StyledLayout = styled.div`
  display: flex;
  width: 90%;
  margin: 4rem auto;
  padding-bottom: 4rem;

  ${media.desktop`
    width: 70%;
  `}
  ${media.laptop`
  width: 90%;`}

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
  width: 50%;
  height: 80vh;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile &&
  media.tablet`
    width: 100%;
    overflow: hidden;
    height: 100%;
  `}
`
export const IndexWrapper = styled.section``
export const StyledHeader = styled.header`
  width: 50%;
  padding-right: 8rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
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
  border-bottom: 1px solid #202022;
  transition: background 300ms ease-in-out;
  :hover {
    background: #202022;
    cursor: pointer;
  }
  ${media.mobile &&
  media.tablet`
    padding: 1rem 0.5rem;
  `}
`
export const StyledCardTitle = styled.h2`
  font-size: 2rem;
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
  width: 100%;
  position: sticky;
  top: 0;
  margin-bottom: 2rem;
  background: #151515;
`

export const StyledNav = styled.nav`
  display: flex;
  height: 3rem;
`

export const StyledList = styled.ul`
  display: flex;
`

export const StyledListItem = styled.li`
  height: 100%;
  display: flex;
  margin-right: 2rem;
  padding: 1rem 0.8rem;
  align-items: center;
  transition: background 300ms ease-in-out;
  font-size: 0.7rem;
  font-weight: 400;

  :hover {
    background: #202022;
    cursor: pointer;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.07rem;
`

export const StyledLogoBox = styled.div`
  font-weight: 700;
  font-size: 2rem;

  padding: 1rem;
  width: fit-content;
  transition: background 300ms ease-in-out;
  :hover {
    background: #202022;
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
