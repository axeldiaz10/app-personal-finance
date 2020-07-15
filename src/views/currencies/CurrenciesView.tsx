import React, { useEffect } from 'react'
import * as S from './CurrenciesView.styles'
import ListItem from '../../components/listItem/index'
import FloatButton from '../../components/floatButton';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchCurrencies, deleteCurrency } from '../../state/currencies/actions'
import { LinearProgress } from '@material-ui/core'
import { RootState } from '../../state/rootReducer';

const CurrenciesView = () => {
    const currencies = useSelector((state: RootState) => state.currenciesReducer.currencies)
    const loadingCurrencies = useSelector((state: RootState) => state.currenciesReducer.loadingCurrencies)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchCurrencies())
    }, [dispatch])

    const handleClickNew = () => history.push('/currencies/new')
    const handleClickEdit = (id: number) => history.push(`/currencies/${id}`)
    const handleClickDelete = (id: number) => dispatch(deleteCurrency(id))

    return (
        <S.Container>
            {!loadingCurrencies 
                ? currencies.map((currency) => (
                    <div key={currency.id}>
                        <ListItem
                            title={currency.name}
                            primary={{
                                text: currency.abreviature,
                                fontStyle: 'italic'}}
                            onClickEdit={() => handleClickEdit(currency.id)}
                            onClickDelete={() => handleClickDelete(currency.id)}
                        />
                    </div>))
                : <LinearProgress color="secondary" />}
            <FloatButton onClick={handleClickNew}/>
        </S.Container>
    )
}

export default CurrenciesView
