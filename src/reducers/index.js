import { combineReducers } from 'redux';

import { LoadingSpinReducer } from './loadingSpinReducer';

import { RootNavigator } from 'navigators/rootNavigator/RootNavigator';
import { MainNavigatorAuth } from 'navigators/mainNavigatorAuth/MainNavigatorAuth';
import { MainNavigatorNoAuth } from 'navigators/mainNavigatorNoAuth/MainNavigatorNoAuth';
import { MainTabReducer } from 'navigators/mainTab/MainTabNavigator';
import { FeedTabNavigator } from 'navigators/tabFeed/FeedTabNavigator';
import { FavoriteTabNavigator } from 'navigators/tabFavorite/FavoriteTabNavigator';
import { CreateTabNavigator } from 'navigators/tabCreate/CreateTabNavigator';
import { MessageTabNavigator } from 'navigators/tabMessage/MessageTabNavigator';
import { ProfileTabNavigator } from 'navigators/tabProfile/ProfileTabNavigator';

const reducers = combineReducers({
  loadingSpin: LoadingSpinReducer,
  rootNavigator: (state, action) =>
    RootNavigator.router.getStateForAction(action, state),

  mainNavigatorAuth: (state, action) =>
    MainNavigatorAuth.router.getStateForAction(action, state),

  mainNavigatorNoAuth: (state, action) =>
    MainNavigatorNoAuth.router.getStateForAction(action, state),

  mainTabNavigator: MainTabReducer,

  feedTabNavigator: (state, action) =>
    FeedTabNavigator.router.getStateForAction(action, state),

  favoriteTabNavigator: (state, action) =>
    FavoriteTabNavigator.router.getStateForAction(action, state),

  createTabNavigator: (state, action) =>
    CreateTabNavigator.router.getStateForAction(action, state),

  messageTabNavigator: (state, action) =>
    MessageTabNavigator.router.getStateForAction(action, state),

  profileTabNavigator: (state, action) =>
    ProfileTabNavigator.router.getStateForAction(action, state)
});

export default reducers;
