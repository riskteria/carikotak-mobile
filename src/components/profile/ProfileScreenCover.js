import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content } from 'native-base';

import styles from './styles';

class ProfileScreenCover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Content style={StyleSheet.flatten(styles.coverBg)} />;
  }
}

export default ProfileScreenCover;
