import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.progressBar}>
        <ActivityIndicator size="large" color="#EA0000" animating={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBar: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16
  }
});

export default ProgressBar;
