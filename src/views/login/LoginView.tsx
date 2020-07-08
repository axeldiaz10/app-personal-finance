import React, { FunctionComponent, useState } from 'react'
import * as S from './LoginView.styles'
import Input from '../../components/input/index'
import Avatar from '../../components/avatar'
import Button from '../../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { login, setAdmin } from '../../state/app/actions'
import Checkbox from '../../components/checkbox'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RootState } from '../../state/rootReducer'

type props = {

}

const LoginView: FunctionComponent<props> = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const loggingIn = useSelector((state: RootState) => state.appReducer.loggingIn)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChangeValue = (value: string, key: string) => {
        key === 'email' && setEmail(value)
        key === 'password' && setPassword(value)
    }

    const handleChangeCheck = (check: boolean) => {
        setIsAdmin(check)
    }

    const handleLogin = () => {
        const regExpEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'g')
        if(password !== '' && regExpEmail.test(email)) {
            dispatch(setAdmin(isAdmin))
            dispatch(login(email, password, history))
        }else {
            alert('Invald fields: verify information')
        }
    }

    return (
        <S.Container>
            <S.Avatar>
                <Avatar
                    src={logo}
                    width={150}
                    height={150}
                />
            </S.Avatar>
            <Input
                inputKey='email'
                value={email}
                type='text'
                label='Email' 
                onChangeValue={handleChangeValue}
            />
            <Input
                inputKey='password'
                value={password}
                type='password'
                label='Password' 
                onChangeValue={handleChangeValue}
            />
            <S.Checkbox>
                <span>Log as admin</span>
                <Checkbox
                    value={isAdmin}
                    onChange={handleChangeCheck}
                />
            </S.Checkbox>
            <Button 
                loading={loggingIn}
                text='Login'
                onClick={handleLogin}
            />
        </S.Container>
    )
}

export default LoginView

