import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import * as S from './HeaderContainer.styles';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/rootReducer';
import { setLogged } from '../../state/app/actions'
type props = {

}

const HeaderContainer: FunctionComponent<props> = (props) => {
    const history = useHistory();
    const isLogged = useSelector((state: RootState) => state.appReducer.isLogged)
    const dispatch = useDispatch()

    const login = () => {
        history.push('/login')
    }

    const logout = () => {
        dispatch(setLogged(false))
        history.push('/login')
    }

    return (
        <S.Container>
            <AppBar position='static'>
                <S.ToolBar>
                <span></span>
                    {isLogged 
                        ? <Button color='inherit' onClick={() => logout()}>Logout</Button>
                        : <Button color='inherit' onClick={() => login()}>Login</Button>}
                </S.ToolBar>
            </AppBar>
        </S.Container>
    )
}

export default HeaderContainer
