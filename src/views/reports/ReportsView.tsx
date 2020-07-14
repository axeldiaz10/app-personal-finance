import React, { useState, useEffect } from 'react'
import Select from '../../components/select'
import BoxItem from '../../components/boxItem'
import * as S from './ReportsView.styles'
import { useDispatch, useSelector } from 'react-redux'
import { 
    fetchExpensesByMonthsByCategory, 
    fetchExpensesByMonthsByDay, 
    fetchExpensesForecast, 
    fetchMovements 
} from '../../state/reports/actions'
import { LinearProgress } from '@material-ui/core'
import { RootState } from '../../state/rootReducer'
import { Transaction } from '../../helpers/types'

const ReportsView = () => {
    const [reportSelected, setReportSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const dispatch = useDispatch()
    const expensesForecast = useSelector((state: RootState) => state.reportsReducer.expensesForecast)
    const transactionsFiltered = useSelector((state: RootState) => state.reportsReducer.transactionsFiltered)
    const loadingReport = useSelector((state: RootState) => state.reportsReducer.loadingReport)

    // useEffect(() => {
    //     monthSelected !== '' && reportSelected === reportTypes.EXPENSES_BY_MONTHS_BY_DAY && dispatch(fetchExpensesByMonthsByDay())
    //     monthSelected !== '' && reportSelected === reportTypes.EXPENSES_BY_MONTHS_BY_CATEGORY && dispatch(fetchExpensesByMonthsByCategory())
    // }, [monthSelected])

    useEffect(() => {
        reportSelected === reportTypes.EXPENSES_FORECAST && dispatch(fetchExpensesForecast())
        reportSelected === reportTypes.MOVEMENTS && dispatch(fetchMovements())
        reportSelected === reportTypes.EXPENSES_BY_MONTHS_BY_DAY && dispatch(fetchExpensesByMonthsByDay())
        reportSelected === reportTypes.EXPENSES_BY_MONTHS_BY_CATEGORY && dispatch(fetchExpensesByMonthsByCategory())
        setMonthSelected('')
    }, [reportSelected])

    const handleChangeReportSelected = (value: string) => {
        setReportSelected(value)
    }

    const handleChangeMonthSelected = (value: string) => {
        setMonthSelected(value)
    }

    const renderBoxesItem = () => {
        switch(reportSelected) {
            case reportTypes.EXPENSES_FORECAST:
                return renderExpensesForecastBoxes()
            case reportTypes.EXPENSES_BY_MONTHS_BY_DAY:
                return monthSelected !== '' && renderExpensesByMonthsByDayBoxes()
            case reportTypes.MOVEMENTS:
                return renderMovementsBoxes()
            case reportTypes.EXPENSES_BY_MONTHS_BY_CATEGORY:
                return monthSelected !== '' && renderExpensesByMonthsByCategoryBoxes()
            default:
                return null
        }
    }

    const renderExpensesForecastBoxes = () => (
        expensesForecast.map((account) => (
            <div key={account.id}>
                <BoxItem 
                    info={
                        <div>
                            <span>{account.account_name}</span>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <div>
                                    <span style={{fontWeight: 'bold', fontSize: 12}}>
                                        {`${account.label_next_month} ${account.label_next_month_amount}`} 
                                    </span>
                                    <span style={{fontSize: 12}}>{` (${account.currency})`}</span>
                                </div>
                                <span style={{fontSize: 11}}>{`${account.label_next_month_percent} `}
                                    {account.label_next_month_percent.includes('-')
                                        ? <span style={{color: 'red'}}>↓</span>
                                        : <span style={{color: 'green'}}>↑</span>
                                    }
                                </span>
                            </div>
                        </div>
                    }
                    description={
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <div style={{fontSize: 12}}>
                                <span>{`${account.label_last_month}: `}
                                    <span style={{fontWeight: 'bold'}}>{`${account.label_last_month_amount} `}</span> 
                                    <span>{`(${account.currency})`}</span>
                                </span>
                            </div>
                            <div style={{fontSize: 12}}>
                                <span>{`${account.label_two_months_ago}: `}</span>
                                <span style={{fontWeight: 'bold'}}>{`${account.label_two_months_ago_amount} `}</span>
                                <span>{`(${account.currency})`}</span>
                            </div>
                        </div>
                    }
                />
            </div>
        ))
    )

    const renderExpensesByMonthsByDayBoxes = () => {
        return transactionsFiltered.length > 0 
            ? transactionsFiltered
                .find((transaction) => transaction.filter_text === monthSelected)
                .transactions
                .map((transaction: Transaction) => (
                    <div key={transaction.id}>
                        <BoxItem 
                            info={
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 11}}>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <span>{`${transaction.date}`}</span>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                        <span style={{fontSize: 12}}>{`${transaction.type} `} {transaction.type === 'Egreso'
                                        ? <span style={{color: 'red'}}>↓</span>
                                        : <span style={{color: 'green'}}>↑</span>
                                    }</span>
                                        <span><span style={{fontWeight: 'bold'}}>{`${transaction.amount} `}</span>{`${transaction.currency}`}</span>
                                    </div>
                                </div>
                            }

                            description={
                                <div style={{fontSize: 12, textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                                    <span>Balance: </span>
                                    {transaction.accounts.map((account, index) => (
                                        <div key={index}>
                                            <span style={{fontWeight: 'bold'}}>{` ${index !== 0 ? ' +' : ' '} ${account.balance} `}</span>
                                            <span style={{fontStyle: 'italic'}}>{` ${account.currency} `}</span>
                                        
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                    </div>
            ))
            : <div> No found data </div>
    }

    const renderMovementsBoxes = () => {
        return transactionsFiltered.length > 0
            ? transactionsFiltered[0]
                .transactions
                .map((transaction: Transaction) => (
                    <BoxItem 
                    info={
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 11}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontWeight: 'bold'}}>{`${transaction.category}`}</span>
                                <span>{`${transaction.date}`}</span>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                <span style={{fontSize: 12}}>{`${transaction.type}`} {transaction.type === 'Egreso'
                                        ? <span style={{color: 'red'}}>↓</span>
                                        : <span style={{color: 'green'}}>↑</span>
                                    }</span>
                                <span><span style={{fontWeight: 'bold'}}>{`${transaction.amount}`}</span> {`(${transaction.currency})`}</span>
                            </div>
                        </div>
                    }/>
                ))
            : <div>No found data</div>
    }

    const renderExpensesByMonthsByCategoryBoxes = () => {
        return transactionsFiltered.length > 0 
            ? transactionsFiltered
                .find((transaction) => transaction.filter_text === monthSelected)
                .transactions.map((transaction: Transaction) => (
                <div key={transaction.id}>
                    <BoxItem 
                        info={
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 11}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={{fontSize: 12, fontWeight: 'bold'}}>{`${transaction.category}`}</span>
                                    <span>{`${transaction.date}`}</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                    <span style={{fontSize: 12}}>{`${transaction.type}`} {transaction.type === 'Egreso'
                                        ? <span style={{color: 'red'}}>↓</span>
                                        : <span style={{color: 'green'}}>↑</span>
                                    }</span>
                                    <span><span style={{fontWeight: 'bold'}}>{`${transaction.amount}`}</span>{` (${transaction.currency})`}</span>
                                </div>
                            </div>
                        }
                    />
                </div>
        ))  : <div>No found data</div>
    }

    return (
        <S.Container>
            <Select label='Reports' value={reportSelected} onChange={handleChangeReportSelected} data={dataReports}/>
            {[reportTypes.EXPENSES_BY_MONTHS_BY_DAY, reportTypes.EXPENSES_BY_MONTHS_BY_CATEGORY].includes(reportSelected) && 
                <Select label='Month' value={monthSelected} onChange={handleChangeMonthSelected} data={dataMonths}/>
            }
            <S.Body>
                {!loadingReport
                    ? renderBoxesItem()
                    : <LinearProgress color="secondary" />
                }
            </S.Body>
        </S.Container>
    )
}

export default ReportsView

const dataReports = [
    {
        key: 'EXPENSES_FORECAST',
        name: 'Expenses forecast'
    },
    {
        key: 'EXPENSES_BY_MONTHS_BY_DAY',
        name: 'Expenses by months by day'
    },
    {
        key: 'MOVEMENTS',
        name: 'Movements'
    },
    {
        key: 'EXPENSES_BY_MONTHS_BY_CATEGORY',
        name: 'Expenses by months by category'
    }
]

const dataMonths = [
    {
        key: 'Enero',
        name: 'Enero'
    },
    {
        key: 'Febrero',
        name: 'Febrero'
    },
    {
        key: 'Marzo',
        name: 'Marzo'
    }
]

const reportTypes = {
    EXPENSES_FORECAST: 'EXPENSES_FORECAST',
    EXPENSES_BY_MONTHS_BY_DAY: 'EXPENSES_BY_MONTHS_BY_DAY',
    MOVEMENTS: 'MOVEMENTS',
    EXPENSES_BY_MONTHS_BY_CATEGORY: 'EXPENSES_BY_MONTHS_BY_CATEGORY',
};