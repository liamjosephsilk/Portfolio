import React, { createContext, FC, useState } from 'react'
import { MenuContextType } from '../../lib/types'

export const MenuContext = createContext<MenuContextType>({
    open: false,
    setOpen: () => {}
})

const MenuProvider: FC = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <MenuContext.Provider value={{open, setOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider