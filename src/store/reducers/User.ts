import {OPEN_LOGIN} from '../actions/AOpenLogin';
/*
*
*/
const actions = {

    [OPEN_LOGIN]: (state: any, action: any) => {
        console.log(state);
        return {...state, openLogin: action.payload};
    },
};

const initState = {
    openLogin: false
};

export default (state : any = initState, action: any): any => {
    const key: string = action.type;
    if (actions[key as keyof typeof actions]) {
        return actions[key as keyof typeof actions](state, action);
    }

    return state;
};