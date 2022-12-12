import CourseCard from '../../components/CourseCard'
import LinkButton from '../../components/UI_Kit/main-buttons/link-button'
import * as S from './styles'
import { courses } from '../../mock/mock'

const MainPage = () => {
   

    return(
        <S.MainPage>
            <S.MainTitle>Начните заниматься спортом и улучшите качество жизни</S.MainTitle>
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
    )
}

export default MainPage