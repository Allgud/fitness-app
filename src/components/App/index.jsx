import Modal from '../UI_Kit/modal'
import TrainingChoice from '../Modals/training-choice'
import GlobalStyles from './global'

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <TrainingChoice />
            </Modal>
        </>
    ) 
}

export default App