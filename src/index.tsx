import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import createStore from './store';
import * as createHistory from 'history';
import {AppStyled} from './style'

const history = createHistory.createHashHistory();
const store = createStore(history);
ReactDOM.render(
  <AppStyled>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppStyled>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
