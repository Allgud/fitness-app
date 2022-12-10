import React from "react"
import Modal from '../UI_Kit/modal'
import InputProgress from '../Modals/input-progress'
import GlobalStyles from './global'

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <InputProgress />
            </Modal>
        </>
    ) 
}

export default App