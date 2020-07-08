import axios from 'axios'
import endPoints from './endPoints';

const API = (url, method, data) => {
    const request = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    if(data && method === 'POST') {
        request.data = data
    }

    if(data && method === 'GET') {
        request.params = data
    }

    return axios(request)
        .then((response) => {
            return response
        })
}

const login = (data, success, error) => {
    API(endPoints.LOGIN, 'POST', data)
        .then((response) => {
            const { data: { token } } = response
            axios.defaults.headers.common = { 'Authorization': `${token}`}
            return success(response)
        })
        .catch(error)
}

const fetchCurrencies = (success, error) => {
    API(endPoints.FETCH_CURRENCIES, 'GET')
        .then(success)
        .catch(error)
}

const fetchCurrency = (data, success, error) => {
    API(endPoints.FETCH_CURRENCY, 'POST', data)
        .then(success)
        .catch(error)
}

const createCurrency = (data, success, error) => {
    API(endPoints.CREATE_CURRENCY, 'POST',data)
        .then(success)
        .catch(error)
}

const editCurrency = (data, success, error) => {
    API(endPoints.EDIT_CURRENCY, 'POST', data)
        .then(success)
        .catch(error)
}

const deleteCurrency = (data, success, error) => {
    API(endPoints.DELETE_CURRENCY, 'POST', data)
        .then(success)
        .catch(error)
}

const fetchClients = (success, error) => {
    API(endPoints.FETCH_CLIENTS, 'GET')
        .then(success)
        .catch(error)
}

const fetchClient = (data, success, error) => {
    API(endPoints.FETCH_CLIENT, 'POST', data)
        .then(success)
        .catch(error)
}

const createClient = (data, success, error) => {
    API(endPoints.CREATE_CLIENT, 'POST', data)
        .then(success)
        .catch(error)
}

const editClient = (data, success, error) => {
    API(endPoints.EDIT_CLIENT, 'POST', data)
        .then(success)
        .catch(error)
}

const deleteClient = (data, success, error) => {
    API(endPoints.DELETE_CLIENT, 'POST', data)
        .then(success)
        .catch(error)
}

const fetchCategories = (success, error) => {
    API(endPoints.FETCH_CATEGORIES, 'GET')
        .then(success)
        .catch(error)
}

const fetchCategory = (data, success, error) => {
    API(endPoints.FETCH_CATEGORY, 'POST', data)
        .then(success)
        .catch(error)
}

const createCategory = (data, success, error) => {
    API(endPoints.CREATE_CATEGORY, 'POST', data)
        .then(success)
        .catch(error)
}

const editCategory = (data, success, error) => {
    API(endPoints.EDIT_CATEGORY, 'POST', data)
        .then(success)
        .catch(error)
}

const deleteCategory = (data, success, error) => {
    API(endPoints.DELETE_CATEGORY, 'POST', data)
        .then(success)
        .catch(error)
}

const fetchExpensesForecast = (data, success, error) => {
    API(endPoints.FETCH_EXPENSES_FORECAST, 'POST', data)
        .then(success)
        .catch(success)
}

const fetchExpensesByMonthsByDay = (data, success, error) => {
    API(endPoints.FETCH_EXPENSES_BY_MONTHS_BY_DAY, 'POST', data)
        .then(success)
        .catch(error)
}

const fetchMovements = (data, success, error) => {
    API(endPoints.FETCH_MOVEMENTS, 'POST', data)
        .then(success)
        .catch(error)
}

const fetchExpensesByMonthsByCategory = (data, success, error) => {
    API(endPoints.FETCH_EXPENSES_BY_MONTHS_BY_CATEGORY, 'POST', data)
        .then(success)
        .catch(error)
}

const fetchTransactions = (success, error) => {
    API(endPoints.FETCH_TRANSACTIONS, 'GET')
        .then(success)
        .catch(error)
}

const fetchTransaction = (data, success, error) => {
    API(endPoints.FETCH_TRANSACTION, 'POST', data)
        .then(success)
        .catch(error)
}

const createTransaction = (data, success, error) => {
    API(endPoints.CREATE_TRANSACTION, 'POST', data)
        .then(success)
        .catch(error)
}

const editTransaction = (data, success, error) => {
    API(endPoints.EDIT_TRANSACTION, 'POST', data)
        .then(success)
        .catch(error)
}

const deleteTransaction = (data, success, error) => {
    API(endPoints.DELETE_TRANSACTION, 'POST', data)
        .then(success)
        .catch(error)
}

const fetchBalance = (success, error) => {
    API(endPoints.FETCH_BALANCE, 'GET')
        .then(success)
        .catch(error)
}

export default {
    login,
    fetchCurrencies,
    fetchCurrency,
    createCurrency,
    editCurrency,
    deleteCurrency,
    fetchClients,
    fetchClient,
    createClient,
    editClient,
    deleteClient,
    fetchCategories,
    fetchCategory,
    createCategory,
    editCategory,
    deleteCategory,
    fetchExpensesForecast,
    fetchExpensesByMonthsByDay,
    fetchMovements,
    fetchExpensesByMonthsByCategory,
    fetchTransactions,
    fetchTransaction,
    createTransaction,
    editTransaction,
    deleteTransaction,
    fetchBalance
}

