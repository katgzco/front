import types from '../types';

export const updateLoginData = (payload) => ({
    type: types.UPDATE_USER_LOGIN,
    payload,
});
