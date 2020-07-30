export const OPEN_LOGIN = '@@node/OPEN_LOGIN';

export default (data:boolean) => {
    return {
        payload: data,
        type: OPEN_LOGIN,

    }
};