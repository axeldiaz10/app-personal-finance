import services from '../../services/index'
import types from './types'
import { Dispatch, Action } from 'redux'
import { Balance } from '../../helpers/types'


const fetchBalance = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingBalance(true))
        services.fetchBalance(
            (response: any) => {
                dispatch(loadingBalance(false))
                const { data: { accounts } } = response
                dispatch(setBalance(accounts))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingBalance = (loadingBalance: boolean) => {
    return {
        type: types.LOADING_BALANCE,
        loadingBalance
    }
}

const setBalance = (balance: Balance) => {
    return {
        type: types.SET_BALANCE,
        balance
    }
}

export {
    fetchBalance
}