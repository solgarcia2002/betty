import {OPEN_LOGIN} from '../actions/AOpenLogin';
import {SET_USER} from '../actions/ASetUser';
/*
*
*/
const actions = {

    [OPEN_LOGIN]: (state: any, action: any) => ( {...state, showLogin: action.payload}),
    [SET_USER]: (state: any, action: any) => ( {...state, data: action.payload}),
};

const initState = {
    showLogin: false,
    data: null,
};

export default (state : any = initState, action: any): any => {
    const key: string = action.type;
    if (actions[key as keyof typeof actions]) {
        return actions[key as keyof typeof actions](state, action);
    }

    return state;
};