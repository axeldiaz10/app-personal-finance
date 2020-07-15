import React from 'react'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import * as S from './styles'
import Avatar from '../avatar'

type props = {
    avatarSrc?: string,
    title: string,
    primary?: {
        text: string,
        fontStyle?: string,
    },
    secondary?: {
        text: string,
        fontStyle?: string
    },
    onClickEdit?: Function,
    onClickDelete?: Function,
    readOnly?: boolean
}

const ListItem: React.FunctionComponent<props> = ({
    title,
    primary, 
    secondary,
    avatarSrc,
    onClickEdit,
    onClickDelete,
    readOnly
}) => {
    return (
        <S.Container>
            <S.Avatar>
                {avatarSrc &&
                    <Avatar 
                        src={avatarSrc}
                        width={56}
                        height={56}/>}
            </S.Avatar>
            <S.Info>
                <S.Title>{title}</S.Title>
                {primary && <S.Primary fontStyle={primary.fontStyle}>{primary.text}</S.Primary>}
                {secondary && <S.Secondary fontStyle={secondary.fontStyle}>{secondary.text}</S.Secondary>}
            </S.Info>
            <S.Actions>
                <IconButton onClick={() => onClickEdit()}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => onClickDelete()}>
                    <DeleteIcon />
                </IconButton>
            </S.Actions>
        </S.Container>
    )
}

export default ListItem
