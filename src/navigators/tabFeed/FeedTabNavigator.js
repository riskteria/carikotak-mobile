import { StackNavigator } from 'react-navigation';

import FeedScreen from 'components/feed/FeedScreen';
import FindScreen from 'components/find/FindScreen';
import LocationScreen from 'components/location/LocationScreen';
import ProductListScreen from 'components/product-list/ProductListScreen';
import SearchScreen from 'components/search/SearchScreen';
import StoryListScreen from 'components/story-list/StoryListScreen';

const routeConfiguration = {
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      header: null
    }
  },
  Find: {
    screen: FindScreen,
    navigationOptions: {
      title: 'Temukan kotak'
    }
  },
  Location: {
    screen: LocationScreen,
    navigationOptions: {
      header: null
    }
  },
  ProductList: {
    screen: ProductListScreen,
    navigationOptions: {
      title: 'Product List'
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null
    }
  },
  StoryList: {
    screen: StoryListScreen,
    navigationOptions: {
      title: 'Story List'
    }
  }
};

const stackNavigatorConfiguration = {
  headerMode: 'float'
};

export const FeedTabNavigator = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
