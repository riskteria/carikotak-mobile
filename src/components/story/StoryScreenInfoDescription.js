import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content } from 'native-base';
import HTMLView from 'react-native-htmlview';

import htmlStyleSheet from './htmlStyleSheet';
import styles from './styles';

class StoryScreenInfoDescription extends Component {
  render() {
    const { story } = this.props;

    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <Content>
          <HTMLView
            value={story.body}
            stylesheet={htmlStyleSheet}
            style={styles.htmlViewStyle}
          />
        </Content>
      </Content>
    );
  }
}

export default StoryScreenInfoDescription;
