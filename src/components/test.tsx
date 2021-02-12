import React, { FC } from 'react'

type TestProps = {
    title: string
}

const Test: FC<TestProps> = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Test