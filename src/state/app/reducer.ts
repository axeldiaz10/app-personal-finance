import types from "./types";

type AppAction = {
    type: string,
    loggingIn?: boolean,
    isAdmin?: boolean,
    isLogged?: boolean
}

type AppState = {
    loggingIn?: boolean,
    isAdmin?: boolean,
    isLogged?: boolean
}

const initialState = {
    loggingIn: false,
    isAdmin: false,
    isLogged: false
}

const appReducer = (state: AppState = initialState, action: AppAction) => {
    switch (action.type) {
        case types.LOGGING_IN:
            return {
                ...state,
                loggingIn: action.loggingIn
            }
        
        case types.SET_ADMIN:
            return {
                ...state,
                isAdmin: action.isAdmin
            }
        
        case types.SET_LOGGED:
            return {
                ...state,
                isLogged: action.isLogged
            }

        default:
            return state
    }
}

export default appReducer