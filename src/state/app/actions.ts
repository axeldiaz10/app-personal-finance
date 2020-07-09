import types from './types'
import services from '../../services/index'
import { History } from 'history';
import { Action, Dispatch } from 'redux';

const loggingIn = (loggingIn: boolean) => {
    return {
        type: types.LOGGING_IN,
        loggingIn
    }
}

const login = (email: string, password: string, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loggingIn(true))
        const data = {email, password}
        services.login(data, 
            (response: any) => {
                dispatch(loggingIn(false))
                dispatch(setLogged(true))
                history.push('/')
            },
            (error: any) => {
                alert(error)
            })
    }
}

const setAdmin = (isAdmin: boolean) => {
    return {
        type: types.SET_ADMIN,
        isAdmin
    }
}

const setLogged = (isLogged: boolean) => {
    return {
        type: types.SET_LOGGED,
        isLogged
    }
}

export {
    login,
    setAdmin,
    setLogged
}