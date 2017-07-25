import { combineReducers } from 'redux';

import { RootNavigator } from 'navigators/rootNavigator/RootNavigator';
import { MainNavigatorAuth } from 'navigators/mainNavigatorAuth/MainNavigatorAuth';
import { MainNavigatorNoAuth } from 'navigators/mainNavigatorNoAuth/MainNavigatorNoAuth';

const reducers = combineReducers({
  rootNavigator: (state, action) =>
    RootNavigator.router.getStateForAction(action, state),

  mainNavigatorAuth: (state, action) =>
    MainNavigatorAuth.router.getStateForAction(action, state),

  mainNavigatorNoAuth: (state, action) =>
    MainNavigatorNoAuth.router.getStateForAction(action, state)
});

export default reducers;
