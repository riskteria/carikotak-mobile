import { StackNavigator } from 'react-navigation';

import LandingScreen from 'components/landing/LandingScreen';
import LoginScreenContainer from 'components/login/LoginScreenContainer';
import RegisterScreen from 'components/register/RegisterScreen';
import ForgotScreen from 'components/forgot/ForgotScreen';

const routeConfiguration = {
  Landing: {
    screen: LandingScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreenContainer,
    navigationOptions: {
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }
    }
  },
  Forgot: {
    screen: ForgotScreen,
    navigationOptions: {
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }
    }
  }
};

const stackNavigatorConfiguration = {
  headerMode: 'float'
};

export const MainNavigatorNoAuth = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
