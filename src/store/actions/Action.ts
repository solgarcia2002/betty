export const ACTION = '@@react/ACTION';

export default (info : any) => ({
    payload: info,
    type: ACTION,
})