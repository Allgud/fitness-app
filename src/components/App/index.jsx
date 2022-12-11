import Modal from '../UI_Kit/modal'
import ConfirmProgress from '../Modals/confirm-progress'
import GlobalStyles from './global'

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <ConfirmProgress />
            </Modal>
        </>
    ) 
}

export default App