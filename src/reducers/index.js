import { combineReducers } from 'redux';

import { MainNavigatorReducer } from 'navigators/MainNavigator';
import { MainTabReducer } from 'navigators/mainTab/MainTabNavigator';
import { FeedTabNavigator } from 'navigators/tabFeed/FeedTabNavigator';
import { FavoriteTabNavigator } from 'navigators/tabFavorite/FavoriteTabNavigator';
import { CreateTabNavigator } from 'navigators/tabCreate/CreateTabNavigator';
import { MessageTabNavigator } from 'navigators/tabMessage/MessageTabNavigator';
import { ProfileTabNavigator } from 'navigators/tabProfile/ProfileTabNavigator';

const reducers = combineReducers({

	mainNavigator: MainNavigatorReducer,

	mainTabNavigator: MainTabReducer,

	feedTabNavigator: (state, action) => FeedTabNavigator.router.getStateForAction(action, state),

	favoriteTabNavigator: (state, action) => FavoriteTabNavigator.router.getStateForAction(action, state),

	createTabNavigator: (state, action) => CreateTabNavigator.router.getStateForAction(action, state),

	messageTabNavigator: (state, action) => MessageTabNavigator.router.getStateForAction(action, state),

	profileTabNavigator: (state, action) => ProfileTabNavigator.router.getStateForAction(action, state)

});

export default reducers;
