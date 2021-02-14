import React, { FC } from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import styled from 'styled-components'
import theme from 'prism-react-renderer/themes/github'

const Language = styled.div`
    position: absolute;
    top: -30px;
    right: 0;
    padding: 10px 20px;
    background: rgb(246, 248, 250);
    text-transform: uppercase;
    font-weight: 800;
    color: gray;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 400px) {
        font-size: 0.7rem;
    }
`

const Pre = styled.pre`
    padding: 30px;
    overflow-x: scroll;
    margin: 40px 0;
    font-size: 16px;
    font-weight: 600;

    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`


const CodeBlock = ({ children, className }) => {
    const language = className.replace(/language-/, '')
    return (
        <div style={{position: "relative"}}>
            <Language>{language}</Language>
        <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
            <Pre className={className} style={{...style}}>
            {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                ))}
                </div>
            ))}
            </Pre>
        )}
        </Highlight>
    </div>
  )
}

export default CodeBlock