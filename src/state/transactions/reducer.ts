import types from './types';
import { Transaction } from '../../helpers/types';

type TransactionState = {
    transactions: Transaction[],
    loadingTransactions: boolean,
    transaction: Transaction,
    loadingTransaction: boolean
}

type TransactionAction = {
    type: string,
    transactions?: Transaction[],
    loadingTransactions?: boolean,
    transaction?: Transaction,
    loadingTransaction?: boolean
}

const initialState = {
    transactions: [] as Transaction[],
    loadingTransactions: false,
    transaction: {} as Transaction,
    loadingTransaction: false
}

const transactionReducer = (state: TransactionState = initialState, action: TransactionAction) => {
    switch (action.type) {
        case types.SET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.transactions
            }

        case types.LOADING_TRANSACTIONS: 
            return {
                ...state,
                loadingTransactions: action.loadingTransactions
            }
            
        case types.SET_TRANSACTION:
            return {
                ...state,
                transaction: action.transaction
            }

        case types.LOADING_TRANSACTION:
            return {
                ...state,
                loadingTransaction: action.loadingTransaction
            }

        default:
            return state
    }
}

export default transactionReducer