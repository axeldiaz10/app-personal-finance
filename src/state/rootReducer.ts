import { combineReducers } from 'redux'
import appReducer from './app/reducer'
// import currenciesReducer from './currencies/reducer'
// import clientsReducer from './clients/reducer'
// import categoriesReducer from './categories/reducer'
// import reportsReducer from './reports/reducer'
// import transactionsReducer from './transactions/reducer'
// import balanceReducer from './balance/reducer'

const rootReducer = combineReducers({
    appReducer,
    // currenciesReducer,
    // clientsReducer,
    // categoriesReducer,
    // reportsReducer,
    // transactionsReducer,
    // balanceReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer