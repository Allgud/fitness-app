import { useEffect, useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from '../Header'
import * as S from './styles'

const Layout = () => {
    const [main, setMain] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if(location.pathname === '/'){
            setMain(true)
            return
        }
        setMain(false)
    }, [main])

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