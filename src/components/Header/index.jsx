import * as S from './styles'
import WhiteLogo from '../Logos/WhiteLogo'
import BlackLogo from '../Logos/BlackLogo'
import EnterButton from '../UI_Kit/main-buttons/enter-button'
import { useModal } from '../../hooks/useModal'

const Header = ({main}) => {
    const { toggleActive } = useModal()
    return(
        <S.Header>
            <S.LeftBox>
                {main ? <WhiteLogo /> : <BlackLogo />}
                {main && <S.HeaderText>Онлайн-тренировки для занятий дома</S.HeaderText>}
            </S.LeftBox>
            {main && <EnterButton toggleModal={toggleActive}/>}
        </S.Header>
    )
}

export default Header