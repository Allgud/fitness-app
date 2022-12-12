import GlobalStyles from './global'
import AppRoutes from '../../routes'
import '../../../node_modules/overlayscrollbars/styles/overlayscrollbars.min.css'  

const App = () => {
    return(
       <>
            <GlobalStyles />
            <AppRoutes />
        </>
    ) 
}

export default App