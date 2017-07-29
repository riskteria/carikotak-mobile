import { StackNavigator } from 'react-navigation';

import ProductScreenContainer from 'components/product/ProductScreenContainer';
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

// Report Component
import ReportScreen from 'components/report/ReportScreen';

import { MainTabNavigator } from 'navigators/mainTab/MainTabNavigator';

const routeConfiguration = {
  Main: { screen: MainTabNavigator },

  Product: {
    screen: ProductScreenContainer,
    path: 'product/:slug',
    navigationOptions: {
      header: null
    }
  },
  Story: {
    screen: StoryScreenContainer,
    path: 'story/:slug',
    navigationOptions: {
      header: null
    }
  },

  Report: {
    screen: ReportScreen,
    navigationOptions: {
      title: 'Laporkan'
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
      header: null
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
      header: null
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
      header: null
    }
  },

  ProfileSetting: {
    screen: ProfileSetting,
    navigationOptions: {
      header: null
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
