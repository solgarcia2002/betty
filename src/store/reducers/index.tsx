/* Third Party Import Block */
import { combineReducers } from 'redux';

// Reducers import block
import User from './User';
import { connectRouter } from 'connected-react-router'
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

/*
* Place all your reducers here
*/
export default combineReducers({

    User,
    router: connectRouter(history)
});