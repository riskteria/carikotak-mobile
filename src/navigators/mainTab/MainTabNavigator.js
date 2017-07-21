import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import { CreateTabNavigator } from '../tabCreate/CreateTabNavigator';
import { FavoriteTabNavigator } from '../tabFavorite/FavoriteTabNavigator';
import { FeedTabNavigator } from '../tabFeed/FeedTabNavigator';
import MessageTabContainer from '../tabMessage/MessageTabContainer';
import ProfileTabContainer from '../tabProfile/ProfileTabContainer';

const routeConfiguration = {

	FeedTab: {
		screen: FeedTabNavigator,
		navigationOptions: {
			tabBarLabel: 'Beranda',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-home-outline" />
			)
		}
	},

	FavoriteTab: {
		screen: FavoriteTabNavigator,
		navigationOptions: {
			title: 'Favorit',
			tabBarLabel: 'Favorit',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-heart-outline" />
			)
		}
	},
	CreateTab: {
		screen: CreateTabNavigator,
		navigationOptions: {
			tabBarLabel: 'Pasang',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-add-circle-outline" />
			)
		}
	},
	MessageTab: { screen: MessageTabContainer },
	ProfileTab: { screen: ProfileTabContainer }
};

const tabNavigatorConfiguration = {
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	lazy: false,
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#1ba39c',
		inactiveTintColor: '#4d4d4d',
		showIcon: true,
		pressColor: '#e8e8e8',
		labelStyle: {
			fontSize: 8,
			paddingBottom: 0
		},
		style: {
			backgroundColor: '#fff'
		},
		indicatorStyle: {
			height: 0
		},
		tabStyle: {
			paddingBottom: 0
		}
	},
	navigationOptions: {
		statusBarStyle: 'light-content'
	}
};

export const MainTabNavigator = TabNavigator(routeConfiguration, tabNavigatorConfiguration);

export const MainTabReducer = (state, action) => {
	switch (action.type) {
		case 'JUMP_TO_TAB':
			return { ...state, index: 0 };
		default:
			return MainTabNavigator.router.getStateForAction(action, state);
	}
};
