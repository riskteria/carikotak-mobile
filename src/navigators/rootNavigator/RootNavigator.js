import { StackNavigator } from 'react-navigation';

import MainNavigatorAuthContainer from 'navigators/mainNavigatorAuth/MainNavigatorAuthContainer';
import MainNavigatorNoAuthContainer from 'navigators/mainNavigatorNoAuth/MainNavigatorNoAuthContainer';

const routeConfiguration = {
  SignedIn: {
    screen: MainNavigatorAuthContainer,
    navigationOptions: {
      header: null
    }
  },

  SignedOut: {
    screen: MainNavigatorNoAuthContainer,
    navigationOptions: {
      header: null
    }
  }
};

export const RootNavigator = StackNavigator(routeConfiguration);

// export const createRootNavigator = (signedIn = false) => {
//   return StackNavigator(routeConfiguration, {
//     mode: 'modal',
//     // initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
//     initialRouteName: 'SignedOut'
//   });
// };
