import { combineReducers } from 'redux'
import appReducer from './app/reducer'
import currenciesReducer from './currencies/reducer'
import categoriesReducer from './categories/reducer'
import clientsReducer from './clients/reducer'
import transactionsReducer from './transactions/reducer'
import reportsReducer from './reports/reducer'
import balanceReducer from './balance/reducer'

const rootReducer = combineReducers({
    appReducer,
    currenciesReducer,
    categoriesReducer,
    clientsReducer,
    transactionsReducer,
    reportsReducer,
    balanceReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer