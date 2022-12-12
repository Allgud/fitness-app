import * as S from './styles'

const EnterButton = ({toggleModal}) => {
    return(
        <S.EnterButton onClick={toggleModal}>Войти</S.EnterButton>
    )
}

export default EnterButton