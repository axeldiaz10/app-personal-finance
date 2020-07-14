import services from "../../services"
import types from "./types"
import { Action, Dispatch } from "redux"

const loadingReport = (loadingReport: boolean) => {
    return {
        type: types.LOADING_REPORT,
        loadingReport
    }
}

const setExpensesForecast = (expensesForecast: Array<Object>) => {
    return {
        type: types.SET_EXPENSES_FORECAST,
        expensesForecast
    }
}

const setTransactionsFiltered = (transactionsFiltered: Array<Object>) => {
    return {
        type: types.SET_TRANSACTIONS_FILTERED,
        transactionsFiltered
    }
}

const fetchExpensesForecast = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingReport(true))
        services.fetchExpensesForecast(
            {},
            (response: any) => {
                dispatch(loadingReport(false))
                const { data: { accounts } } = response
                dispatch(setExpensesForecast(accounts))
            },
            () => {}
        )
    }
}

const fetchExpensesByMonthsByDay = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingReport(true))
        services.fetchExpensesByMonthsByDay(
            {},
            (response: any) => {
                dispatch(loadingReport(false))
                const { data: { transactions_filtered } } = response
                dispatch(setTransactionsFiltered(transactions_filtered))
            },
            () => {}
        )
    }
}

const fetchMovements = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingReport(true))
        services.fetchMovements(
            {},
            (response: any) => {
                dispatch(loadingReport(false))
                const { data: { transactions_filtered } } = response
                dispatch(setTransactionsFiltered(transactions_filtered))
            },
            () => {}
        )
    }
}

const fetchExpensesByMonthsByCategory = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingReport(true))
        services.fetchExpensesByMonthsByCategory(
            {},
            (response: any) => {
                dispatch(loadingReport(false))
                const { data: { transactions_filtered } } = response
                dispatch(setTransactionsFiltered(transactions_filtered))
            },
            () => {}
        )
    }
}

export {
    fetchExpensesForecast,
    fetchExpensesByMonthsByDay,
    fetchMovements,
    fetchExpensesByMonthsByCategory
}