import React from "react"
import styled, { css } from "styled-components"

const styles = css`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  margin: 0;
  margin-top: ${props => props.mt || "0"};
  margin-bottom: ${props => props.mb || "0"};
  margin-right: ${props => props.mr || "0"};
  margin-left: ${props => props.ml || "0"};
  color: ${props => props.color};
  text-transform: ${props => props.transform || "uppercase"};
  letter-spacing: ${props => props.spacing || "0.1rem"};
  line-height: ${props => props.line || "1rem"};

  @media screen and (max-width: 590px) {
    font-size: ${props => props.sizeMobile || "1.2rem"};
    line-height: ${props => props.lineMobile || "1.6"};
  }

  @media (min-width: 591px) and (max-width: 760px) {
    font-size: ${props => props.sizeTablet || "1.2rem"};
    line-height: ${props => props.lineTablet || "1.6"};
  }
`

const Heading = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles}
`
export default Heading
