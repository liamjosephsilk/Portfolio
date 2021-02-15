import { useEffect, useState } from 'react'

const useScrollProgress = (): number => {

    const [scrollPercentage, setScrollPercentage] = useState<number>(0)

    const calculateScrollDistance = (): void => {
        if(typeof window !== 'undefined') {
            const scrollTop: number = window.pageYOffset
            const windowHeight: number = window.innerHeight
            const documentHeight: number = getDocumenHeight()
            
            const totalDocumentScrollHeight: number = documentHeight - windowHeight
            const scrollPosition: number = Math.floor(scrollTop / totalDocumentScrollHeight * 100)

            setScrollPercentage(scrollPosition)
        }
    }

    const getDocumenHeight = (): number => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', () => calculateScrollDistance())
    })

    return scrollPercentage

}

export default useScrollProgress