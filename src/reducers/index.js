import { combineReducers } from 'redux';

import { authSessionHandler } from './authReducer';

const reducers = combineReducers({
  authSessionHandler
});

export default reducers;
