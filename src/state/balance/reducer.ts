import types from './types';
import { Balance } from '../../helpers/types';

type BalanceState = {
    balance: Array<Balance>,
    loadingBalance: boolean
}

type BalanceAction = {
    type: string,
    balance?: Array<Balance>,
    loadingBalance?: boolean
}

const initialState = {
    balance: [] as Balance[],
    loadingBalance: false,
}

const balanceReducer = (state: BalanceState = initialState, action: BalanceAction) => {
    switch (action.type) {
        case types.SET_BALANCE:
            return {
                ...state,
                balance: action.balance
            }

        case types.LOADING_BALANCE: 
            return {
                ...state,
                loadingBalance: action.loadingBalance
            }
            
        default:
            return state
    }
}

export default balanceReducer