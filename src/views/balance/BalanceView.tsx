import React, { useEffect } from 'react'
import * as S from './BalanceView.styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBalance } from '../../state/balance/actions';
import { LinearProgress } from '@material-ui/core'
import BoxItem from '../../components/boxItem';
import { RootState } from '../../state/rootReducer';
import { Balance } from '../../helpers/types';

type props = {
    
}

const BalanceView: React.FunctionComponent<props> = (props) => {
    const dispatch = useDispatch()
    const balance = useSelector((state: RootState) => state.balanceReducer.balance)
    const loadingBalance = useSelector((state: RootState) => state.balanceReducer.loadingBalance)    

    useEffect(() => {
        dispatch(fetchBalance())
    }, [])

    return (
        <S.Container>
            {!loadingBalance 
                ? balance.map((balance: Balance) => (
                    <div key={balance.id}>
                        <BoxItem 
                            info={
                                <div>
                                    <span>{`${balance.account_name}`} 
                                        <span style={{fontSize: 13}}>{` (${balance.currency})`}</span>
                                    </span>
                                </div>
                            }
                            description={
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                    <div style={{fontSize: 13, fontWeight: 'bold'}}>
                                        <span>{`Balance: `}</span>
                                        <span>{`${balance.label_balance} `}</span> 
                                        <span>{`(${balance.currency})`}</span>
                                    </div>
                                    <div style={{fontSize: 12}}>
                                        <span>{`Total ingresos: `}</span>
                                        <span>{`${balance.label_total_ingresos} `}</span>
                                        <span>{`(${balance.currency})`}</span>
                                    </div>
                                    <div style={{fontSize: 12}}>
                                        <span>{`Total egresos: `}</span>
                                        <span>{`${balance.label_total_egresos} `}</span>
                                        <span>{`(${balance.currency})`}</span>
                                    </div>
                                </div>
                            }
                        />
                    </div>))
                : <LinearProgress color="secondary" />}
        </S.Container>
    )
}

export default BalanceView