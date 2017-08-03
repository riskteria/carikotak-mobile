import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';

import styles from './styles';

import ProfileTabProduct from './ProfileTabProduct';
import ProfileTabReview from './ProfileTabReview';
import ProfileTabStory from './ProfileTabStory';

class FeedContentTab extends Component {
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
          <ProfileTabStory navigation={navigation} user={user} />
        </Tab>
        <Tab
          heading="KOTAK"
          tabStyle={StyleSheet.flatten(styles.tabStyle)}
          textStyle={StyleSheet.flatten(styles.tabTextStyle)}
          activeTabStyle={StyleSheet.flatten(styles.tabStyle)}
          activeTextStyle={StyleSheet.flatten(styles.tabActiveTextStyle)}
        >
          <ProfileTabProduct navigation={navigation} user={user} />
        </Tab>

        <Tab
          heading="Ulasan"
          tabStyle={StyleSheet.flatten(styles.tabStyle)}
          textStyle={StyleSheet.flatten(styles.tabTextStyle)}
          activeTabStyle={StyleSheet.flatten(styles.tabStyle)}
          activeTextStyle={StyleSheet.flatten(styles.tabActiveTextStyle)}
        >
          <ProfileTabReview navigation={navigation} user={user} />
        </Tab>
      </Tabs>
    );
  }
}

export default FeedContentTab;
