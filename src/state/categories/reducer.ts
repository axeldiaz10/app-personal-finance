import types from './types';
import { Category } from '../../helpers/types';

type CategoriesState = {
    categories?: Array<Category>,
    loadingCategories?: boolean,
    category?: Category,
    loadingCategory?: boolean
}

type CategoriesAction = {
    type?: string,
    categories?: Array<Category>,
    loadingCategories?: boolean,
    category?: Category,
    loadingCategory?: boolean
}

const initialState = {
    categories: [] as Category[],
    loadingCategories: false,
    category: {} as Category,
    loadingCategory: false
}

const categoriesReducer = (state: CategoriesState = initialState, action: CategoriesAction) => {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        case types.LOADING_CATEGORIES: 
            return {
                ...state,
                loadingCategories: action.loadingCategories
            }
            
        case types.SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }

        case types.LOADING_CATEGORY:
            return {
                ...state,
                loadingCategory: action.loadingCategory
            }

        default:
            return state
    }
}

export default categoriesReducer