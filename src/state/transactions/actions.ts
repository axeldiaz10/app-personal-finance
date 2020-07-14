import services from '../../services/index'
import types from './types'
import { Action, Dispatch } from 'redux'
import { Transaction } from '../../helpers/types'
import { History } from 'history'

const fetchTransactions = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingTransactions(true))
        services.fetchTransactions(
            (response: any) => {
                dispatch(loadingTransactions(false))
                const { data: { transactions } } = response
                dispatch(setTransactions(transactions))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingTransactions = (loadingTransactions: boolean) => {
    return {
        type: types.LOADING_TRANSACTIONS,
        loadingTransactions
    }
}

const setTransactions = (transactions: Array<Transaction>) => {
    return {
        type: types.SET_TRANSACTIONS,
        transactions
    }
}

const fetchTransaction = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingTransaction(true))
        services.fetchTransaction(
            id,
            (response: any) => {
                dispatch(loadingTransaction(false))
                const { data: { transaction } } = response
                dispatch(setTransaction(transaction))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingTransaction = (loadingTransaction: boolean) => {
    return {
        type: types.LOADING_TRANSACTION,
        loadingTransaction
    }
}

const setTransaction = (transaction: Transaction) => {
    return {
        type: types.SET_TRANSACTION,
        transaction
    }
}

const createTransaction = (transaction: Transaction, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingTransaction(true))
        services.createTransaction(
            transaction,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingTransaction(false))
                history.push('/transactions')
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const editTransaction = (transaction: Transaction, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingTransaction(true))
        services.editTransaction(
            transaction,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingTransaction(false))
                history.push('/transactions')
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const deleteTransaction = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loadingTransactions(true))
        services.deleteTransaction(
            id,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(fetchTransactions())
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

export {
    fetchTransactions,
    fetchTransaction,
    createTransaction,
    editTransaction,
    deleteTransaction
}