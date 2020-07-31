import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import codeStyles from "../lib/codeStyles"

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={codeStyles}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
