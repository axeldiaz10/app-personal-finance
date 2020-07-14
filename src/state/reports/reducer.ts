import types from './types'

type ReportsState = {
    loadingReport: boolean,
    transactionsFiltered: Array<any>,
    expensesForecast: Array<any>
}

type ReportsAction = {
    type: string,
    loadingReport?: boolean,
    transactionsFiltered?: Array<any>,
    expensesForecast?: Array<any>
}

const initialState = {
    loadingReport: false,
    transactionsFiltered: [] as [],
    expensesForecast: [] as [],
}

const reportsReducer = (state: ReportsState = initialState, action: ReportsAction) => {
    switch (action.type) {
        case types.LOADING_REPORT:
            return {
                ...state,
                loadingReport: action.loadingReport
            }
        
        case types.SET_EXPENSES_FORECAST:
            return {
                ...state,
                expensesForecast: action.expensesForecast
            }

        case types.SET_TRANSACTIONS_FILTERED:
            return {
                ...state,
                transactionsFiltered: action.transactionsFiltered
            }

        default:
            return state;
    }
}

export default reportsReducer