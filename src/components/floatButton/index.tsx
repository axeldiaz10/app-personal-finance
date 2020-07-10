import React, { FunctionComponent } from 'react'
import * as S from './styles'
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type props = {
    onClick: Function
}

const FloatButton: FunctionComponent<props> = ({onClick}) => {

    return (
        <S.Container>
            <Fab color='primary' onClick={() => onClick()}>
                <AddIcon />
            </Fab>
        </S.Container>
    )
}

export default FloatButton
