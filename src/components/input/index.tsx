import React, { FunctionComponent } from 'react'
import * as S from './styles'

type props = {
    inputKey: string
    label: string,
    onChangeValue: Function,
    type: string,
    value: string
}

const Input: FunctionComponent<props> = ({inputKey, label, onChangeValue, type, value = '' }) => {
    return (
        <S.Container>
            <S.TextField
                value={value}
                label={label}
                onChange={(event) => onChangeValue(event.target.value, inputKey)} 
                type={type}
                variant='outlined'
                InputLabelProps={{ shrink: type === 'date' ? true : undefined }}
                />
        </S.Container>
    )
}

export default (Input)
