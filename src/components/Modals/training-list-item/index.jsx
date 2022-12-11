import * as S from './styles'
import customCheckbox from '../../../assets/icons/checkbox.svg'

const TrainingListItem = ({title, day, completed}) => {

    return(
        <S.TrainingListItem $completed={completed}>
            <S.ItemTitle>{title}</S.ItemTitle>
            {completed && <S.CustomCheckbox src={customCheckbox}/>}
            <S.ItemDescription>
                <S.CourseTile>Йога на каждый день</S.CourseTile>
                <S.DaySpan>{day} день</S.DaySpan>
            </S.ItemDescription>

        </S.TrainingListItem>
    )
}

export default TrainingListItem