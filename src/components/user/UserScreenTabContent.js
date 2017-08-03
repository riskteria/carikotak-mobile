import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';

import styles from './styles';

import UserTabProduct from './UserTabProduct';
import UserTabReview from './UserTabReview';
import UserTabStory from './UserTabStory';

class UserScreenTabContent extends Component {
  render() {
    const { navigation, user } = this.props;

    return (
      <Tabs
        locked={true}
        tabBarUnderlineStyle={StyleSheet.flatten(styles.tabUnderlineStyle)}
      >
        <Tab
          heading="CERITA"
          tabStyle={StyleSheet.flatten(styles.tabStyle)}
          textStyle={StyleSheet.flatten(styles.tabTextStyle)}
          activeTabStyle={StyleSheet.flatten(styles.tabStyle)}
          activeTextStyle={StyleSheet.flatten(styles.tabActiveTextStyle)}
        >
          <UserTabStory navigation={navigation} user={user} />
        </Tab>
        <Tab
          heading="KOTAK"
          tabStyle={StyleSheet.flatten(styles.tabStyle)}
          textStyle={StyleSheet.flatten(styles.tabTextStyle)}
          activeTabStyle={StyleSheet.flatten(styles.tabStyle)}
          activeTextStyle={StyleSheet.flatten(styles.tabActiveTextStyle)}
        >
          <UserTabProduct navigation={navigation} user={user} />
        </Tab>

        <Tab
          heading="ULASAN"
          tabStyle={StyleSheet.flatten(styles.tabStyle)}
          textStyle={StyleSheet.flatten(styles.tabTextStyle)}
          activeTabStyle={StyleSheet.flatten(styles.tabStyle)}
          activeTextStyle={StyleSheet.flatten(styles.tabActiveTextStyle)}
        >
          <UserTabReview navigation={navigation} user={user} />
        </Tab>
      </Tabs>
    );
  }
}

export default UserScreenTabContent;
