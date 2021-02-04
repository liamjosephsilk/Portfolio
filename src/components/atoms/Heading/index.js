import React from "react"
import styled, { css } from "styled-components"

const styles = css`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  margin: 0;
  margin-top: ${props => props.mt || "0"};
  margin-bottom: ${props => props.mb || "0"};
  color: ${props => props.color};
  text-transform: ${props => props.transform || "uppercase"};
  letter-spacing: ${props => props.spacing || "0.1rem"};
  line-height: ${props => props.line || "1rem"};
`

const Heading = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles}
`
export default Heading
