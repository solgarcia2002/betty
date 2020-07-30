import {OPEN_LOGIN} from '../actions/AOpenLogin';
/*
*
*/
const actions = {

    [OPEN_LOGIN]: (state: any, action: any) => ( {...state, showLogin: action.payload}),
};

const initState = {
    showLogin: false
};

export default (state : any = initState, action: any): any => {
    const key: string = action.type;
    if (actions[key as keyof typeof actions]) {
        return actions[key as keyof typeof actions](state, action);
    }

    return state;
};