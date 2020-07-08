import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import * as S from './App.styles';
import HeaderContainer from './containers/header/HeaderContainer';
import SidebarContainer from './containers/sidebar/SidebarContainer';
import routes from './routes';
import { useSelector } from 'react-redux'
import { RootState } from './state/rootReducer';

const App = () => {
  const isLogged = useSelector((state: RootState) => state.appReducer.isLogged)
  return (
    <Router>
      <S.App>
        {isLogged && <SidebarContainer />}
        <S.Body>
          <HeaderContainer />
          <S.Content>
            <Switch>
              {routes.map((route) => (
                <Route {...route} />
              ))}
            </Switch>
          </S.Content>
        </S.Body>
      </S.App>
    </Router>
  );
}

export default App;
