import { combineReducers } from 'redux'


// delcare reducer
import * as AuthReducer from '../reducers/AuthReducer'

export default combineReducers(Object.assign(
  AuthReducer,
));
 