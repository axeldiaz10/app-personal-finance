import types from './types'
import { Currency } from '../../helpers/types'

type CurrenciesState = {
    currencies: Array<Currency>,
    loadingCurrencies: boolean,
    currency: Currency,
    loadingCurrency: boolean
}

type CurrenciesAction = {
    type: string,
    currencies?: Array<Currency>,
    loadingCurrencies?: boolean,
    currency?: Currency,
    loadingCurrency?: boolean
}

const initialState = {
    currencies: [] as Currency[],
    loadingCurrencies: false,
    currency: {} as Currency,
    loadingCurrency: false
}

const currenciesReducer = (state: CurrenciesState = initialState, action: CurrenciesAction) => {
    switch (action.type) {
        case types.SET_CURRENCIES:
            return {
                ...state,
                currencies: action.currencies
            }
        
        case types.LOADING_CURRENCIES:
            return {
                ...state,
                loadingCurrencies: action.loadingCurrencies
            }
            
        case types.SET_CURRENCY:
            return {
                ...state,
                currency: action.currency
            }

        case types.LOADING_CURRENCY: 
            return {
                ...state,
                loadingCurrency: action.loadingCurrency
            }
            
        default:
            return state;
    }
}

export default currenciesReducer