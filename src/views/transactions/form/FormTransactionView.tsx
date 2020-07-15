import React, { useEffect, useState } from 'react'
import * as S from './FormTransactionView.styles'
import Input from '../../../components/input'
import Button from '../../../components/button'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransaction, createTransaction, editTransaction } from '../../../state/transactions/actions'
import { fetchCategories } from '../../../state/categories/actions'
import { fetchCurrencies } from '../../../state/currencies/actions'
import Select from '../../../components/select'
import { RootState } from '../../../state/rootReducer'
import { Transaction } from '../../../helpers/types'

type props = {

}

const TransactionView: React.FunctionComponent<props> = () => {
    const [transactionState, setTransactionState] = useState<Transaction>({
        id: null,
        title: '',
        amount: null,
        description: '',
        type_id: null,
        category_id: null,
        currency_id: null
    })
    
    const history = useHistory()
    const params = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const transaction = useSelector((state: RootState) => state.transactionsReducer.transaction)
    const categories = useSelector((state: RootState) => state.categoriesReducer.categories)
    const currencies = useSelector((state: RootState) => state.currenciesReducer.currencies)
    const loadingTransaction = useSelector((state: RootState) => state.transactionsReducer.loadingTransaction)

    useEffect(() => {
        params.id && dispatch(fetchTransaction(Number(params.id)))
        dispatch(fetchCategories())
        dispatch(fetchCurrencies())
    }, [])


    useEffect(() => {
        params.id !== 'new' && setTransactionState(transaction)
    }, [transaction])

    const handleChangeValue = (value: string, key: string) => {
        setTransactionState({
            ...transactionState,
            [key]: value
        })
    }

    const handleChangeCategorySelected = (category_id: number) => {
        setTransactionState({
            ...transactionState,
            category_id
        })
    }

    const handleChangeCurrencySelected = (currency_id: number) => {
        setTransactionState({
            ...transactionState,
            currency_id
        })
    }

    const handleChangeTypeSelected = (type_id: number) => {
        setTransactionState({
            ...transactionState,
            type_id
        })
    }

    const handleTransactionCreator = () => {
        if(validateFields()) {
            params.id === 'new'
                ? dispatch(createTransaction(transactionState, history))
                : dispatch(editTransaction(transactionState, history))
        } else {
            alert('Invalid field: verify information')
        }
    }

    const validateFields = () => {
        const { title, description, amount, category_id, type_id, currency_id } = transactionState
        if(title && description && amount && category_id && type_id && currency_id) {
            return true
        }

        return false
    }

    return (
        <S.Container>
            <Input
                type='text'
                inputKey='title'
                label='Title'
                value={transactionState.title}
                onChangeValue={handleChangeValue}/>
            <Select
                label='Categories'
                value={transactionState.category_id ? String(transactionState.category_id) : ''}
                onChange={handleChangeCategorySelected}
                data={categories.map((category) => ({key: category.id, name: category.name}))}/>
            <Select
                label='Type'
                value={transactionState.type_id ? String(transactionState.type_id) : ''}
                onChange={handleChangeTypeSelected}
                data={typesMock.map(type => ({key: type.id, name: type.name}))}/>
            <S.Amount>
                <S.Input>
                    <Input
                        inputKey='amount'
                        label='Amount'
                        type='number'
                        value={transactionState.amount ? String(transactionState.amount) : ''}
                        onChangeValue={handleChangeValue}/>
                </S.Input>
                <S.Select>
                    <Select
                        label='Currencies'
                        value={transactionState.currency_id ? String(transactionState.currency_id) : ''}
                        onChange={handleChangeCurrencySelected}
                        data={currencies.map(currency => ({key: currency.id, name: currency.name}))}/>

                </S.Select>
            </S.Amount>
            <Input
                type='text'
                inputKey='description'
                label='Description'
                value={transactionState.description}
                onChangeValue={handleChangeValue}/>
            <Button
                loading={loadingTransaction}
                text={params.id === 'new' ? 'New' : 'Edit'}
                onClick={handleTransactionCreator}/>
        </S.Container>
    )
}

export default TransactionView

const typesMock = [
    {
        id: 1,
        name: 'Egreso'
    },
    {
        id: 2,
        name: 'Ingreso'
    }
]