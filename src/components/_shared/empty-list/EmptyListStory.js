import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon } from 'native-base';

import colors from 'styles/_colors';

class EmptyListStory extends Component {
  render() {
    return (
      <View style={StyleSheet.flatten(styles.mainContainer)}>
        <Text style={StyleSheet.flatten(styles.textContainer)}>
          Belum ada cerita
        </Text>
        <Icon name="md-sad" style={StyleSheet.flatten(styles.iconContainer)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 64,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorLight
  },
  textContainer: {
    fontSize: 12,
    color: colors.colorGrey,
    paddingVertical: 8
  },
  iconContainer: {
    fontSize: 58,
    color: colors.colorGrey
  }
});

export default EmptyListStory;
