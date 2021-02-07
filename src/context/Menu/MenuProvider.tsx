import React, { Context, ContextType, createContext, FC, Provider, useState } from 'react'
import { MenuContextType, MenuInterface  } from '../../lib/types'

export const MenuContext = createContext<MenuContextType>({
    open: false,
    setOpen: () => {}
})

const MenuProvider: FC = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)

    console.log(`Is open ${open}`)

    return (
        <MenuContext.Provider value={{open, setOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider