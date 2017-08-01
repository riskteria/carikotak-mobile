import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

const middleware = () => {
  return applyMiddleware(thunk, logger);
};

export default createStore(reducers, composeWithDevTools(middleware()));
