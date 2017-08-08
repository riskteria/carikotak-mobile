import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Label, Text } from 'native-base';

import HelpScreenHeader from './HelpScreenHeader';
import styles from './styles';

class HelpScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <HelpScreenHeader navigation={navigation} />

        <Content>
          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Apa itu Carikotak?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              quidem, eius numquam corporis consequuntur! Fugit, alias deleniti
              beatae enim! Iure nemo atque totam rem recusandae maiores,
              delectus quo, neque quod!
            </Text>
          </View>
          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Apa itu Carikotak?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              quidem, eius numquam corporis consequuntur! Fugit, alias deleniti
              beatae enim! Iure nemo atque totam rem recusandae maiores,
              delectus quo, neque quod!
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HelpScreen;
