import React, { useEffect } from 'react'
import * as S from './TransactionsView.styles'
import FloatButton from '../../components/floatButton'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions, deleteTransaction } from '../../state/transactions/actions';
import { LinearProgress } from '@material-ui/core'
import BoxItem from '../../components/boxItem';
import { RootState } from '../../state/rootReducer';

type props = {
    
}

const TransactionsView: React.FunctionComponent<props> = (props) => {
    const dispatch = useDispatch()
    const transactions = useSelector((state: RootState) => state.transactionsReducer.transactions)
    const loadingTransactions = useSelector((state: RootState) => state.transactionsReducer.loadingTransactions)
    const history = useHistory()

    const handleClickNew = () => history.push('/transactions/new')
    const handleClickEdit = (id: number) => history.push(`/transactions/${id}`)
    const handleClickDelete = (id: number) => dispatch(deleteTransaction(id))
    

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    return (
        <S.Container>
            {!loadingTransactions 
                ? transactions.map((transaction) => (
                    <div key={transaction.id}>
                        <BoxItem 
                            info={
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 11}}>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <span style={{fontWeight: 'bold'}}>{transaction.category}</span>
                                        <span>{transaction.date}</span>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                        <span style={{fontSize: 12}}>{`${transaction.type}`} {transaction.type === 'Egreso'
                                            ? <span style={{color: 'red'}}>↓</span>
                                            : <span style={{color: 'green'}}>↑</span>}
                                        </span>
                                        <span><span style={{fontWeight: 'bold'}}>{`${transaction.amount}`}</span>{ `(${transaction.currency})`}</span>
                                    </div>
                                </div>}
                            description={
                                <div style={{fontSize: 12, marginTop: 10}}>
                                    <span style={{fontWeight: 'bold'}}>{`${transaction.title} - `}</span>
                                    <span>{`${transaction.description}`}</span>
                                </div>}
                            editable
                            onClickEdit={() => handleClickEdit(transaction.id)}
                            onClickDelete={() => handleClickDelete(transaction.id)}
                        />
                    </div>))
                : <LinearProgress color='secondary' />}
            <FloatButton onClick={handleClickNew}/>
        </S.Container>
    )
}

export default TransactionsView
