import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import LandingScreen from './modules/views/LandingScreen';

const CarikotakApp = StackNavigator({
  Home: { screen: LandingScreen }
});

AppRegistry.registerComponent('carikotak', () => CarikotakApp);
