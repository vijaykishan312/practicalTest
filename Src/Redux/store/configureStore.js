import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducers/index"
import thunk from 'redux-thunk';

export default function configureStore() {
  const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);
  return store;
} 