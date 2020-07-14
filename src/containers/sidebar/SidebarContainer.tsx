import React, { FunctionComponent } from 'react'
import { List, Divider } from '@material-ui/core';
import * as S from './SidebarContainer.styles';
import Option from '../../components/option';
import { useSelector } from 'react-redux'
import FaceIcon from '@material-ui/icons/Face';
import CategoryIcon from '@material-ui/icons/Category';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { RootState } from '../../state/rootReducer';

type props = {

}

const SidebarContainer: FunctionComponent<props>= (props) => {
    const isAdmin = useSelector((state: RootState) => state.appReducer.isAdmin)

    const options = isAdmin ? AdminOptions : UserOptions

    return (
        <S.Container>
            <S.Logo>
                FINANCES APP
            </S.Logo>
            <Divider />
            <List>
                {options.map((option: any) => (
                    <div key={option.id}>
                        <Option 
                            id={option.id}
                            text={option.text}
                            icon={option.icon}
                            linkTo={option.linkTo}
                            subOptions={option.subOptions && option.subOptions}
                        />
                    </div>
                ))}
            </List>
            <Divider />
        </S.Container>
    )
}

export default SidebarContainer

const AdminOptions: Array<{
    id: number, 
    text: string, 
    icon: any, 
    linkTo: string, 
    subOptions?: Array<object>}> = [
    {
        id: 1,
        text: 'Monedas',
        icon: <AttachMoneyIcon />,
        linkTo: '/currencies'
    },
    {
        id: 2,
        text: 'Categorias',
        icon: <CategoryIcon />,
        linkTo: '/categories'
    },
    {
        id: 3,
        text: 'Clientes',
        icon: <FaceIcon />,
        linkTo: '/clients'
    },
]

const UserOptions: Array<{
    id: number, 
    text: string, 
    icon: any, 
    linkTo: string, 
    subOptions?: Array<object>}> = [
    {
        id: 1,
        text: 'Balance',
        icon: <AccountBalanceWalletIcon />,
        linkTo: '/balance'
    },
    {
        id: 2,
        text: 'Categorias',
        icon: <CategoryIcon />,
        linkTo: '/categories'
    },
    {
        id: 3,
        text: 'Transactions',
        icon: <NoteAddIcon />,
        linkTo: '/transactions'
    },
    {
        id: 4,
        text: 'Reportes',
        icon: <AssessmentIcon />,
        linkTo: '/reports',
    },
    {
        id: 5,
        text: 'Profile',
        icon: <PersonIcon />,
        linkTo: '/profile/1',
    },
]