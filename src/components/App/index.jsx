import Modal from '../UI_Kit/modal'
import ChangeLoginOrPassword from '../Modals/change-login-and-password'
import GlobalStyles from './global'

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <ChangeLoginOrPassword />
            </Modal>
        </>
    ) 
}

export default App