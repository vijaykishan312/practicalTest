import * as types from '../constants';
import createReducer from './createReducer';

export const AuthReducer = createReducer({}, {
  [types.ON_LOGIN_RESPONSE](state, action) {
    return ({ ...state, logindata: action });
  },
})