import { useState, createContext, useEffect } from 'react'

export const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    useEffect(() => {
        console.log(active);
    }, [active])

    const value = {active, toggleActive}

    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider