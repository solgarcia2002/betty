export const SET_USER = '@@node/SET_USER';

export default (data:object) => {
    return {
        payload: data,
        type: SET_USER,

    }
};