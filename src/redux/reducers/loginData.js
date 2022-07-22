import types from '../types';

function loginData(state = {}, action = {}) {
    switch (action.type) {
        case types.UPDATE_USER_LOGIN: {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    }
}
export default loginData;
