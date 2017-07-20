import { StackNavigator } from 'react-navigation';

import FavoriteScreen from 'components/favorite/FavoriteScreen';

const routeConfiguration = {

	Favorite: {
		screen: FavoriteScreen,
		navigationOptions: {
			header: null
		}
	}

};

const stackNavigatorConfiguration = {
	//
};

export const FavoriteTabNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
