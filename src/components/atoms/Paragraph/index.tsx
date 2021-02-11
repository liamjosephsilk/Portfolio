import React, { FC } from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
    font-size: ${props => props.size || "16px"};
    color: ${props => props.color || "#222222"};
    line-height: ${props => props.line || "1.6"};
    font-weight: ${props =>props.weight || "200"};
    margin-top: ${props => props.mt || "20px"};
    margin-bottom: ${props => props.mb || "20px"};
`

type ParagraphProps = {
    size?: string,
    color?: string,
    line?: string,
    weight?: string,
    mt?: string,
    mb?: string
}

const Paragraph: FC<ParagraphProps> = ({ size, color, line, weight, mt, mb, children }) => {
    return  <StyledParagraph size={size} color={color} line={line} weight={weight} mt={mt} mb={mb}>{children}</StyledParagraph>

}

export default Paragraph