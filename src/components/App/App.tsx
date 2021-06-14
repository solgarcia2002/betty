import React from 'react';
import { History } from 'history';
import routes from '../../routes';
import {AppStyled} from './style'
interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return <AppStyled history={history}>{routes}</AppStyled>;
};

export default App;
