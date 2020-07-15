import React, { useEffect, useState } from 'react'
import * as S from './FormClientView.styles'
import Avatar from '../../../components/avatar'
import Input from '../../../components/input'
import Button from '../../../components/button'
import { useParams, useHistory, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClient, createClient, editClient } from '../../../state/clients/actions'
import { RootState } from '../../../state/rootReducer'
import { Client } from '../../../helpers/types'

type props = {
}


const ClientView: React.FunctionComponent<props> = () => {
    const match = useRouteMatch()
    const [clientState, setClientState] = useState<Client>({
        id: null,
        name: '',
        date_of_birth: '',
        email: '',
        photo_url: ''
    })
    const history = useHistory()
    const params = useParams<{id: string}>()
    const dispatch = useDispatch()
    const client = useSelector((state: RootState) => state.clientsReducer.client)
    const loadingClient = useSelector((state: RootState) => state.clientsReducer.loadingClient)

    useEffect(() => {
        params.id && dispatch(fetchClient(Number(params.id)))
    }, [])


    // Continuar con logica para reutilizar vista clientVierw
    useEffect(() => {
        params.id !== 'new' && setClientState(client)
    }, [client])

    const handleChangeValue = (value: string, key: string) => {
        setClientState({
            ...clientState,
            [key]: value
        })
    }

    const handleChangePhoto = (photo_url: string) => {
        setClientState({
            ...clientState,
            photo_url
        })
    }

    const handleClientCreator = () => {
        const route = match.path === '/clients/:id' ? '/clients' : '/'
        const regExpEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'g')
        if(validateFields() && regExpEmail.test(clientState.email)) {
            params.id === 'new'
                ? dispatch(createClient(clientState, history))
                : dispatch(editClient(clientState, history, route))
        } else {
            alert('Invalid field: verify information')
        }
    }

    const validateFields = () => {
        const { name, email, date_of_birth, photo_url } = clientState
        if(name && email && date_of_birth && photo_url) {
            return true
        }

        return false
    }

    return (
        <S.Container>
            <S.Avatar>
                <Avatar
                    src={clientState.photo_url}
                    width={150} 
                    height={150} 
                    editable
                    onChange={handleChangePhoto}/>
            </S.Avatar>
            <Input
                type='text'
                inputKey='name'
                label='Name'
                value={clientState.name}
                onChangeValue={handleChangeValue}/>
            <Input
                type='text'
                inputKey='email'
                label='Email'
                value={clientState.email}
                onChangeValue={handleChangeValue}/>
            <Input
                type='date' 
                inputKey='date_of_birth'
                label='Date of birth' 
                value={clientState.date_of_birth?.split('/').reverse().join('-')}
                onChangeValue={handleChangeValue}/>
            <Button
                loading={loadingClient}
                text={params.id === 'new' ? 'New' : 'Edit'}
                onClick={handleClientCreator}/>
        </S.Container>
    )
}

export default ClientView
