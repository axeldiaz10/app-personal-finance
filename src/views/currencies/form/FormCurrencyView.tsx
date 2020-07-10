import React, { useEffect, useState } from 'react'
import * as S from './FormCurrencyView.styles'
import Input from '../../../components/input'
import Button from '../../../components/button'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrency, createCurrency, editCurrency } from '../../../state/currencies/actions'
import { RootState } from '../../../state/rootReducer'
import { Currency } from '../../../helpers/types'

type props = {

}

const FormCurrencyView: React.FunctionComponent<props> = () => {
    const [currencyState, setCurrencyState] = useState<Currency>({
        id: null,
        name: '',
        abreviature: ''
    })
    const history = useHistory()
    const params = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const currency = useSelector((state: RootState) => state.currenciesReducer.currency)
    const loadingCurrency = useSelector((state: RootState) => state.currenciesReducer.loadingCurrency)


    useEffect(() => {
        params.id && dispatch(fetchCurrency(Number(params.id)))
    }, [])


    // Continuar con logica para reutilizar vista currencyVierw
    useEffect(() => {
        params.id !== 'new' && setCurrencyState(currency)
    }, [currency])

    const handleChangeValue = (value: string, key: string) => {
        setCurrencyState({
            ...currencyState,
            [key]: value
        })
    }

    const handleCurrencyCreator = () => {
        if(validateFields()) {
            params.id === 'new'
                ? dispatch(createCurrency(currencyState, history))
                : dispatch(editCurrency(currencyState, history))
        } else {
            alert('Invalid field: verify information')
        }
    }

    const validateFields = () => {
        if(currencyState.name !== '' && currencyState.abreviature !== '') {
            return true
        }

        return false
    }

    return (
        <S.Container>
            <Input
                type='text'
                inputKey='name'
                label='Name'
                value={currencyState.name}
                onChangeValue={handleChangeValue}/>
            <Input
                type='text'
                inputKey='abreviature'
                label='Abreviature'
                value={currencyState.abreviature}
                onChangeValue={handleChangeValue}/>
            <Button
                loading={loadingCurrency}
                text={params.id === 'new' ? 'New' : 'Edit'}
                onClick={handleCurrencyCreator}/>
        </S.Container>
    )
}

export default FormCurrencyView