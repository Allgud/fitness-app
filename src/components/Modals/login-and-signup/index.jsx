import Form from '../../Form'
import FormInput from "../../FormInput";
import Button from '../../UI_Kit/button'
import BlackLogo from '../../Logos/BlackLogo'

import * as S from './styles'

const LoginAndSignUp = () => {
    const auth = true

    return(
        <Form>
            <BlackLogo />
            <FormInput type='text' placeholder='Логин' />
            <FormInput type='password' placeholder='Пароль' />
            {!auth && <FormInput type='password' placeholder='Повторите пароль'/>}
            <S.FormButtonBox>
                <Button title={!auth ? 'Зарегистрироваться' : 'Войти'}/>
                {auth && <S.SignUpButton>Зарегистрироваться</S.SignUpButton>}
            </S.FormButtonBox>
        </Form> 
    )
}

export default LoginAndSignUp