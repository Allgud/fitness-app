import * as S from './styles'
import { useLocation } from 'react-router-dom'
import LinkButton from '../UI_Kit/main-buttons/link-button'

const CourseCard = ({title, imageLink}) => {
    const location = useLocation()

    return(
        <S.CourseCard image={imageLink}>
            <S.CourseTitle>{title}</S.CourseTitle>
            {
                location.pathname !== '/' 
                && <S.ButtonBox>
                        <LinkButton title="Перейти →"/>
                   </S.ButtonBox>
            }
        </S.CourseCard>
    )
}

export default CourseCard