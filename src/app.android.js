import { StackNavigator } from 'react-navigation';

import RouteConfigs from './configs/route-configs';
import StackNavigatorConfig from './configs/stack-navigator-config';

const AppStack = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppStack;
