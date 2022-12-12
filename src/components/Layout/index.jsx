import { useEffect, useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from '../Header'
import * as S from './styles'
import { useModal } from '../../hooks/useModal'

const Layout = () => {
    const [main, setMain] = useState(false)
    const { active, toggleActive } = useModal()
    const location = useLocation()

    useEffect(() => {
        if(location.pathname === '/'){
            setMain(true)
            return
        }
        setMain(false)
    }, [main])

    useEffect(() => {
        if(active) {
            toggleActive()
        }
    }, [])

    return(
       <S.Wrapper $main={main}>
           <S.Container>
                <Header main={main}/>
                <Outlet />
           </S.Container>
       </S.Wrapper> 
    )
}

export default Layout