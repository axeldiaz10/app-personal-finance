import React from 'react'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import * as S from './styles'

type props = {
    label: string,
    value: string,
    onChange: Function,
    data: Array<{
        key: React.Key,
        name: string,
    }>
}

const SelectComponent: React.FunctionComponent<props> = ({label, value, onChange, data}) => {
    const handleChange = (event: any) => onChange(event.target.value)

    return (
        <S.Container>
            <S.Select variant='outlined'>
                <InputLabel id='input-label-select'>{label}</InputLabel>
                <Select
                    labelId='input-label-select'
                    value={value}
                    onChange={handleChange}
                    label={label}>
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        {data.map((option) => (
                        <MenuItem 
                            key={option.key} 
                            value={option.key}>
                                {option.name}
                        </MenuItem>
                        ))}
                </Select>
            </S.Select>
        </S.Container>
    )
}

export default SelectComponent
