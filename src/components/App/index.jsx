import Modal from '../UI_Kit/modal'
import LoginAndSignUp from '../Modals/login-and-signup'
import GlobalStyles from './global'

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <LoginAndSignUp />
            </Modal>
        </>
    ) 
}

export default App