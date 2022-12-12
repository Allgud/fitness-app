import CourseCard from '../../components/CourseCard'
import LinkButton from '../../components/UI_Kit/main-buttons/link-button'
import Modal from '../../components/UI_Kit/modal'
import * as S from './styles'
import { courses } from '../../mock/mock'
import LoginAndSignUp from '../../components/Modals/login-and-signup'
import { useModal } from '../../hooks/useModal'

const MainPage = () => {
    const { active } = useModal()
   
    return(
        <>
            <S.MainPage>
                <S.MainTitle>Начните заниматься спортом и улучшите качество жизни</S.MainTitle>
                <S.SaleStickerBox />
                <S.MainContent>
                    {
                        courses.map(el => (
                            <li key={el.id}>
                                <CourseCard title={el.title} imageLink={el.image}/>
                            </li>
                        ))
                    }
                </S.MainContent>
                <S.MainButtonBox>
                    <LinkButton 
                        title='Наверх ↑'
                    />  
                </S.MainButtonBox>
            </S.MainPage>
            {
                active 
                && <Modal>
                        <LoginAndSignUp/>
                    </Modal>
            }
        </>
    )
}

export default MainPage