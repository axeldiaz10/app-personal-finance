import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import * as S from './HeaderContainer.styles';
import { useHistory } from 'react-router-dom';

type props = {

}

const HeaderContainer: FunctionComponent<props> = (props) => {
    const history = useHistory();
    
    const getTitle = () => (
        history.location.pathname.toUpperCase().split('/')
    )

    return (
        <S.Container>
            <AppBar position='static'>
                <S.ToolBar>
                <span>{getTitle()}</span>
                    <Button color='inherit' onClick={() => history.push('/login')}>Login</Button>
                </S.ToolBar>
            </AppBar>
        </S.Container>
    )
}

export default HeaderContainer
