import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import FeedScreen from 'components/feed/FeedScreen';
import FavoriteScreen from 'components/favorite/FavoriteScreen';
import CreateScreen from 'components/create/CreateScreen';
import MessageListScreen from 'components/message-list/MessageListScreen';
import ProfileScreen from 'components/profile/ProfileScreen';

const routeConfiguration = {
  FeedTab: {
    screen: FeedScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Beranda',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{ color: tintColor }} name="ios-home-outline" />
    }
  },

  FavoriteTab: {
    screen: FavoriteScreen,
    navigationOptions: {
      header: null,
      title: 'Favorit',
      tabBarLabel: 'Favorit',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{ color: tintColor }} name="ios-heart-outline" />
    }
  },

  CreateTab: {
    screen: CreateScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Pasang',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{ color: tintColor }} name="ios-add-circle-outline" />
    }
  },

  MessageTab: {
    screen: MessageListScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Pesan',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{ color: tintColor }} name="ios-mail-outline" />
    }
  },

  ProfileTab: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Profil',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{ color: tintColor }} name="ios-person" />
    }
  }
};

const tabNavigatorConfiguration = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazy: true,
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

export const MainTabNavigator = TabNavigator(
  routeConfiguration,
  tabNavigatorConfiguration
);

export const MainTabReducer = (state, action) => {
  switch (action.type) {
    case 'JUMP_TO_TAB':
      return { ...state, index: 0 };
    default:
      return MainTabNavigator.router.getStateForAction(action, state);
  }
};
