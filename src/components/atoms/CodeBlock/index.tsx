import React, { FC } from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {mdx} from '@mdx-js/react'



const CodeBlock = ({ children, className }) => {
    // const language = className.replace(/language-/, '')
    return (
        <div>
        <Highlight {...defaultProps} code={children.trim()} language={'javascript'}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={{...style, padding: '20px', overflowX:"scroll", margin: "20px 0"}}>
            {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                ))}
                </div>
            ))}
            </pre>
        )}
        </Highlight>
    </div>
  )
}

export default CodeBlock