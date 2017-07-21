import { combineReducers } from 'redux';

import { MainNavigatorReducer } from 'navigators/MainNavigator';
import { FeedTabNavigator } from 'navigators/FeedTabNavigator';
import { FavoriteTabNavigator } from 'navigators/FavoriteTabNavigator';
import { CreateTabNavigator } from 'navigators/CreateTabNavigator';
import { MessageTabNavigator } from 'navigators/MessageTabNavigator';
import { ProfileTabNavigator } from 'navigators/ProfileTabNavigator';

const reducers = combineReducers({

	mainNavigator: MainNavigatorReducer,

	feedTabNavigator: (state, action) => FeedTabNavigator.router.getStateForAction(action, state),

	favoriteTabNavigator: (state, action) => FavoriteTabNavigator.router.getStateForAction(action, state),

	createTabNavigator: (state, action) => CreateTabNavigator.router.getStateForAction(action, state),

	messageTabNavigator: (state, action) => MessageTabNavigator.router.getStateForAction(action, state),

	profileTabNavigator: (state, action) => ProfileTabNavigator.router.getStateForAction(action, state)

});

export default reducers;
