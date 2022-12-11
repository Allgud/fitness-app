import FormInput from '../../FormInput'
import Button from '../../UI_Kit/button'

import { trainingElements } from "../../../mock/mock";

import * as S from './styles'

const InputProgress = () => {
    return(
        <S.ModalBox>
            <S.ModalTitle>Мой прогресс</S.ModalTitle>
            {
                trainingElements.map(el => (
                    <S.ModalElement key={el.id}>
                        <S.ModalElementTitle>Сколько раз вы сделали {el.title}?</S.ModalElementTitle>
                        <FormInput type='text' placeholder='Введите значение'/>
                    </S.ModalElement>
                ))
            }
            <S.ModalButtonBox>
                <Button title='Отправить'/>
            </S.ModalButtonBox>
        </S.ModalBox>
    )
}

export default InputProgress