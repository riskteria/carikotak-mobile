import { StackNavigator } from 'react-navigation';

import CreateScreen from 'components/create/CreateScreen';

const routeConfiguration = {

	Create: {
		screen: CreateScreen,
		navigationOptions: {
			header: null
		}
	}

};

const stackNavigatorConfiguration = {
	//
};

export const CreateTabNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
