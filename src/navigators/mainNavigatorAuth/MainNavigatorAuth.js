import { StackNavigator } from 'react-navigation';

import ProductScreen from 'components/product/ProductScreen';
import StoryScreenContainer from 'components/story/StoryScreenContainer';

// Feed Components
import FindScreen from 'components/find/FindScreen';
import LocationScreen from 'components/location/LocationScreen';
import ProductListScreen from 'components/product-list/ProductListScreen';
import SearchScreen from 'components/search/SearchScreen';
import StoryListScreen from 'components/story-list/StoryListScreen';

// Message Components
import MessageScreen from 'components/message/MessageScreen';
import NotificationScreen from 'components/notification/NotificationScreen';

// Profile Components
import AccountSetting from 'components/account-setting/AccountSettingScreen';
import ProfileOptionScreen from 'components/profile-option/ProfileOptionScreen';
import ProfileSetting from 'components/profile-setting/ProfileSettingScreen';

import { MainTabNavigator } from 'navigators/mainTab/MainTabNavigator';

const routeConfiguration = {
  Main: { screen: MainTabNavigator },

  Product: {
    screen: ProductScreen,
    navigationOptions: {
      title: 'Produk'
    }
  },
  Story: {
    screen: StoryScreenContainer,
    path: 'story/:slug',
    navigationOptions: {
      title: 'Story'
    }
  },

  // Feed Tab Components

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
  },

  // Message Tab Components

  Message: {
    screen: MessageScreen,
    navigationOptions: {
      header: null
    }
  },

  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      header: null,
      title: 'Pemberitahuan'
    }
  },

  // Profile Tab Components
  AccountSetting: {
    screen: AccountSetting,
    navigationOptions: {
      title: 'Account Setting'
    }
  },

  ProfileSetting: {
    screen: ProfileSetting,
    navigationOptions: {
      title: 'Profile Setting'
    }
  },

  ProfileOption: {
    screen: ProfileOptionScreen,
    navigationOptions: {
      header: null
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
