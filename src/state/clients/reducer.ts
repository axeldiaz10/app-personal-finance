import types from './types';
import { Client } from '../../helpers/types';

type ClientsState = {
    clients: Client[],
    loadingClients: boolean,
    client: Client,
    loadingClient: boolean
}

type ClientsAction = {
    type: string,
    clients?: Client[],
    loadingClients?: boolean,
    client?: Client,
    loadingClient?: boolean
}

const initialState = {
    clients: [] as Client[],
    loadingClients: false,
    client: {} as Client,
    loadingClient: false
}

const clientsReducer = (state: ClientsState = initialState, action: ClientsAction) => {
    switch (action.type) {
        case types.SET_CLIENTS:
            return {
                ...state,
                clients: action.clients
            }

        case types.LOADING_CLIENTS: 
            return {
                ...state,
                loadingClients: action.loadingClients
            }
            
        case types.SET_CLIENT:
            return {
                ...state,
                client: action.client
            }

        case types.LOADING_CLIENT:
            return {
                ...state,
                loadingClient: action.loadingClient
            }

        default:
            return state
    }
}

export default clientsReducer