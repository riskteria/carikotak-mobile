import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Button, Icon, Text, Grid, Col } from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';

class StoryScreenInfoOption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <Grid>
          <Col style={{ paddingRight: 8 }}>
            <Button
              bordered
              block
              dark
              style={{ borderColor: colors.colorAccent }}
            >
              <Icon
                name="md-chatbubbles"
                style={StyleSheet.flatten(styles.optionText)}
              />
              <Text style={StyleSheet.flatten(styles.optionText)}>
                Komentar
              </Text>
            </Button>
          </Col>
          <Col style={{ paddingLeft: 8 }}>
            <Button
              bordered
              block
              dark
              style={{ borderColor: colors.colorAccent }}
            >
              <Icon
                name="md-paper-plane"
                style={StyleSheet.flatten(styles.optionText)}
              />
              <Text style={StyleSheet.flatten(styles.optionText)}>
                Sarankan
              </Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    );
  }
}

export default StoryScreenInfoOption;
