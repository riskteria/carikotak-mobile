import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { show } = this.props;
    return (
      <View style={styles.progressBar}>
        <ActivityIndicator size="large" color="#EA0000" animating={show} />
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

ProgressBar.propTypes = {
  show: PropTypes.bool.isRequired
};

export default ProgressBar;
