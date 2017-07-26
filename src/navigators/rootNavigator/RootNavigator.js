import { StackNavigator } from 'react-navigation';

import { MainNavigatorAuth } from 'navigators/mainNavigatorAuth/MainNavigatorAuth';
import { MainNavigatorNoAuth } from 'navigators/mainNavigatorNoAuth/MainNavigatorNoAuth';

const routeConfiguration = {
  SignedIn: {
    screen: MainNavigatorAuth,
    navigationOptions: {
      header: null
    }
  },

  SignedOut: {
    screen: MainNavigatorNoAuth,
    navigationOptions: {
      header: null
    }
  }
};

export const RootNavigator = StackNavigator(routeConfiguration);

export const createRootNavigator = (authenticated = false) => {
  return StackNavigator(routeConfiguration, {
    mode: 'modal',
    initialRouteName: authenticated ? 'SignedIn' : 'SignedOut'
  });
};
