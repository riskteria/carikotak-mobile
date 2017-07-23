import { StackNavigator } from 'react-navigation';

import ProductScreen from 'components/product/ProductScreen';
import StoryScreen from 'components/story/StoryScreen';

import MainTabContainer from 'navigators/mainTab/MainTabContainer';

const routeConfiguration = {
  Main: { screen: MainTabContainer },

  Product: {
    screen: ProductScreen,
    navigationOptions: {
      title: 'Produk'
    }
  },
  Story: {
    screen: StoryScreen,
    navigationOptions: {
      title: 'Story'
    }
  }
};

const stackNavigatorConfiguration = {
  headerMode: 'float'
};

export const MainNavigatorAuth = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
