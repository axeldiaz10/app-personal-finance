import types from './types'
import services from '../../services/index'
import { Dispatch, Action } from 'redux'
import { History } from 'history';
import { Currency } from '../../helpers/types';

const fetchCurrencies = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCurrencies(true))
        services.fetchCurrencies(
            (response: any) => {
                dispatch(loadingCurrencies(false))
                dispatch(setCurrencies(response.data.currencies))
            },
            (error: any) => {
                alert(error)
            }
        )
    }
}

const setCurrencies = (currencies: Array<Currency>) => {
    return {
        type: types.SET_CURRENCIES,
        currencies
    }
}

const loadingCurrencies = (loadingCurrencies: boolean) => {
    return {
        type: types.LOADING_CURRENCIES,
        loadingCurrencies
    }
}

const fetchCurrency = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCurrency(true))
        services.fetchCurrency(
            id,
            (response: any) => {
                dispatch(loadingCurrency(false))
                const { data: { currency } } = response
                dispatch(setCurrency(currency))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingCurrency = (loadingCurrency: boolean) => {
    return {
        type: types.LOADING_CURRENCY,
        loadingCurrency
    }
}

const setCurrency = (currency: Currency) => {
    return {
        type: types.SET_CURRENCY,
        currency
    }
}

const createCurrency = (currency: Currency, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCurrency(true))
        services.createCurrency(
            currency,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingCurrency(false))
                history.push('/currencies')
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const editCurrency = (currency: Currency, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCurrency(true))
        services.editCurrency(
            currency,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingCurrency(false))
                history.push('/currencies')
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const deleteCurrency = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loadingCurrencies(true))
        services.deleteCurrency(
            id,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(fetchCurrencies())
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

export {
    fetchCurrencies,
    fetchCurrency,
    createCurrency,
    editCurrency,
    deleteCurrency
}