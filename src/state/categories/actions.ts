import services from '../../services/index'
import types from './types'
import { Dispatch, Action } from 'redux'
import { Category } from '../../helpers/types'
import { History } from 'history';

const fetchCategories = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCategories(true))
        services.fetchCategories(
            (response: any) => {
                dispatch(loadingCategories(false))
                const { data: { categories } } = response
                dispatch(setCategories(categories))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingCategories = (loadingCategories: boolean) => {
    return {
        type: types.LOADING_CATEGORIES,
        loadingCategories
    }
}

const setCategories = (categories: Array<Category>) => {
    return {
        type: types.SET_CATEGORIES,
        categories
    }
}

const fetchCategory = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCategory(true))
        services.fetchCategory(
            id,
            (response: any) => {
                dispatch(loadingCategory(false))
                const { data: { category } } = response
                dispatch(setCategory(category))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingCategory = (loadingCategory: boolean) => {
    return {
        type: types.LOADING_CATEGORY,
        loadingCategory
    }
}

const setCategory = (category: Category) => {
    return {
        type: types.SET_CATEGORY,
        category
    }
}

const createCategory = (category: Category, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCategory(true))
        services.createCategory(
            category,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingCategory(false))
                history.push('/categories')
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const editCategory = (category: Category, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingCategory(true))
        services.editCategory(
            category,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingCategory(false))
                history.push('/categories')
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const deleteCategory = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loadingCategories(true))
        services.deleteCategory(
            id,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(fetchCategories())
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

export {
    fetchCategories,
    fetchCategory,
    createCategory,
    editCategory,
    deleteCategory
}