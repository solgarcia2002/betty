import {createBrowserHistory} from 'history';
import { applyMiddleware, compose, createStore } from "redux";
import CombinedReducers from "./reducers";
import { routerMiddleware } from 'react-router-redux';

export const history = createBrowserHistory();

const middleware = [routerMiddleware(history)];

export default (history:any) => {
    const composeEnhancer: typeof compose =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        CombinedReducers,
        composeEnhancer( applyMiddleware(
            ...middleware,
            routerMiddleware(history)
        )),
    );


}