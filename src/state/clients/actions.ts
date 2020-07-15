import services from '../../services/index'
import types from './types'
import { Dispatch, Action } from 'redux'
import { Client } from '../../helpers/types'
import { History } from 'history'

const fetchClients = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingClients(true))
        services.fetchClients(
            (response: any) => {
                dispatch(loadingClients(false))
                const { data: { clients } } = response
                dispatch(setClients(clients))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingClients = (loadingClients: boolean) => {
    return {
        type: types.LOADING_CLIENTS,
        loadingClients
    }
}

const setClients = (clients: Array<Client>) => {
    return {
        type: types.SET_CLIENTS,
        clients
    }
}

const fetchClient = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingClient(true))
        services.fetchClient(
            id,
            (response: any) => {
                dispatch(loadingClient(false))
                const { data: { client } } = response
                dispatch(setClient(client))
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const loadingClient = (loadingClient: boolean) => {
    return {
        type: types.LOADING_CLIENT,
        loadingClient
    }
}

const setClient = (client: Client) => {
    return {
        type: types.SET_CLIENT,
        client
    }
}

const createClient = (client: Client, history: History) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingClient(true))
        services.createClient(
            client,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingClient(false))
                history.push('/clients')
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const editClient = (client: Client, history: History, route: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(loadingClient(true))
        services.editClient(
            client,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(loadingClient(false))
                history.push(route)
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

const deleteClient = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loadingClients(true))
        services.deleteClient(
            id,
            (response: any) => {
                const { data: { message } } = response
                alert(message)
                dispatch(fetchClients())
            },
            (error: any) => {
                console.log(error)
            }
        )
    }
}

export {
    fetchClients,
    fetchClient,
    createClient,
    editClient,
    deleteClient
}