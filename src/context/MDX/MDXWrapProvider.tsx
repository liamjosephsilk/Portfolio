import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { MDXProvider } from '@mdx-js/react'
import { Paragraph, MenuButton, Heading, CodeBlock, Icon, A } from '@atoms'
import { Layout } from '@layouts'

const components = {
    p: props => <Paragraph size="22px" weight="300" color="#222222" {...props}/>,
    h2: props => <Heading weight="900" size="30px" mt="10px" mb="10px" spacing="0.03rem" transform="normal" color="#F2203E" {...props} />,
    code: CodeBlock,
}

const ArticleHeader = styled.header`
    width: 50%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 760px) {
        width: 90%;
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }

    @media screen and (min-width: 1900px) {
        width: 40%;
    }
`

const MDXWrapProvider: FC = ({ children }) => {
    return (
        <MDXProvider components={components}>
            <Layout header={false}>
                <ArticleHeader>
                    <Link to="/articles">
                        <motion.div whileHover={{x: -10}} >
                            <Icon icon="backArrow" fontSize="20px"/>
                        </motion.div>
                        
                    </Link>
                    <MenuButton />
                </ArticleHeader>

                {children}

            </Layout>
        </MDXProvider>
    )
}

export default MDXWrapProvider