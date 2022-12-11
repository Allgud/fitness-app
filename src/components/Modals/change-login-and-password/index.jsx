import Form from '../../Form'
import FormInput from '../../FormInput'
import Button from '../../UI_Kit/button'
import BlackLogo from '../../Logos/BlackLogo'

import * as S from './styles'

const ChangeLoginOrPassword = () => {
    const flag = 'password'

    return( 
        <Form>
            <BlackLogo />
            <S.ModalTitle>{flag === 'login' ? 'Новый логин:' : 'Новый пароль:'}</S.ModalTitle>
            {
                flag === 'login'
                ? <FormInput type='text' placeholder='Логин'/>
                : <>
                    <FormInput type='password' placeholder='Пароль'/>
                    <FormInput type='password' placeholder='Повторите пароль'/>
                </>
            }
            <S.ModalButtonBox>
                <Button title='Сохранить'/> 
            </S.ModalButtonBox>
        </Form>
    )
}

export default ChangeLoginOrPassword