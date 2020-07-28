export const OPEN_LOGIN = '@@node/OPEN_LOGIN';

export default () => {
    console.log('OPENLOGIN')
    return {
        payload: true,
        type: OPEN_LOGIN,

    }
};