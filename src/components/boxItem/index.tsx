import React from 'react'
import * as S from './styles'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

type props = {
    info: JSX.Element,
    description?: JSX.Element
    editable?: boolean,
    onClickEdit?: Function,
    onClickDelete?: Function
}

const BoxItem: React.FunctionComponent<props> = ({ info, description, editable, onClickEdit, onClickDelete }) => {
    return (
        <S.Container>
            <S.Body>
                <div>{info}</div>
                <div>{description}</div>
            </S.Body>
                {editable && <div>
                    <IconButton onClick={() => onClickEdit()}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onClickDelete()}>
                        <DeleteIcon />
                    </IconButton>
                </div>}
        </S.Container>
    )
}


export default BoxItem
