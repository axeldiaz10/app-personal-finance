import React, { useEffect } from 'react'
import * as S from './ClientsView.styles'
import ListItem from '../../components/listItem/index'
import FloatButton from '../../components/floatButton'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchClients, deleteClient } from '../../state/clients/actions';
import { LinearProgress } from '@material-ui/core'
import { RootState } from '../../state/rootReducer';

type props = {
    
}

const ClientsView: React.FunctionComponent<props> = (props) => {
    const dispatch = useDispatch()
    const clients = useSelector((state: RootState) => state.clientsReducer.clients)
    const loadingClients = useSelector((state: RootState) => state.clientsReducer.loadingClients)
    const history = useHistory()

    const handleClickNew = () => history.push('/clients/new')
    const handleClickEdit = (id: number) => history.push(`/clients/${id}`)
    const handleClickDelete = (id: number) => dispatch(deleteClient(id))
    

    useEffect(() => {
        dispatch(fetchClients())
    }, [])

    return (
        <S.Container>
            {!loadingClients 
                ? clients.map((client) => (
                    <div key={client.id}>
                        <ListItem
                            avatarSrc={client.photo_url}
                            title={client.name}
                            primary={{
                                text: client.email
                            }}
                            secondary={{
                                text: client.date_of_birth,
                                fontStyle: 'italic'
                            }}
                            onClickEdit={() => handleClickEdit(client.id)}
                            onClickDelete={() => handleClickDelete(client.id)}
                        />
                    </div>))
                : <LinearProgress color="secondary" />}
            <FloatButton onClick={handleClickNew}/>
        </S.Container>
    )
}

export default ClientsView