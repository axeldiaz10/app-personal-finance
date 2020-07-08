import React, { FunctionComponent } from 'react'
import * as S from './styles'
import { CircularProgress } from '@material-ui/core'

type props = {
    text: string,
    onClick: Function,
    loading: boolean
}

const ButtonComponent: FunctionComponent<props> = ({text, onClick, loading}) => {
    const handleClick = () => {
        !loading && onClick()
    }

    return (
        <S.Container>
            <S.Button variant="contained" color="primary" onClick={handleClick}>
               {loading ? <CircularProgress color="secondary" /> : text}
            </S.Button>
        </S.Container>
    )
}

export default ButtonComponent
