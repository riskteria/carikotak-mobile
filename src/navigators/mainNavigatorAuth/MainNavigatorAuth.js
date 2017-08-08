import { StackNavigator } from 'react-navigation';

import ProductScreenContainer from 'components/product/ProductScreenContainer';
import StoryScreenContainer from 'components/story/StoryScreenContainer';

// Feed Components
import FindScreen from 'components/find/FindScreen';
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

// Create Component
import CreateProductScreen from 'components/create-product/CreateProductScreen';
import CreateStoryScreen from 'components/create-story/CreateStoryScreen';

// User Component
import UserScreen from 'components/user/UserScreen';

// Comment Component
import CommentScreen from 'components/comment/CommentScreen';

// Connection Component
import ConnectionScreen from 'components/connection/ConnectionScreen';

// Help Screen
import HelpScreen from 'components/help/HelpScreen';
import AboutScreen from 'components/about/AboutScreen';

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
      header: null
    }
  },

  // Feed Tab Components

  Find: {
    screen: FindScreen,
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
      header: null
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
  },

  // Create Tab Components
  CreateProduct: {
    screen: CreateProductScreen,
    navigationOptions: {
      header: null
    }
  },
  CreateStory: {
    screen: CreateStoryScreen,
    navigationOptions: {
      header: null
    }
  },

  // User Component
  User: {
    screen: UserScreen,
    navigationOptions: {
      header: null
    }
  },

  Comment: {
    screen: CommentScreen,
    navigationOptions: {
      header: null
    }
  },

  Connection: {
    screen: ConnectionScreen,
    navigationOptions: {
      header: null
    }
  },

  Help: {
    screen: HelpScreen,
    navigationOptions: {
      header: null
    }
  },

  About: {
    screen: AboutScreen,
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
