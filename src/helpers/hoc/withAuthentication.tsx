import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootState } from '../../state/rootReducer'

const withAuthentication = (WrapperComponent: React.FunctionComponent) => {
    const WithAuthentication = (props: any) => {
        const isLogged = useSelector((state: RootState) => state.appReducer.isLogged)
        if(isLogged) {
            return <WrapperComponent {...props}/>
        }
    
        return <Redirect to='/login' />
        
    }

    return WithAuthentication
}

export default withAuthentication


