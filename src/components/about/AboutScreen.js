import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Text, View } from 'native-base';

import AboutScreenHeader from './AboutScreenHeader';
import logo from 'images/logo-carikotak-putih.png';
import styles from './styles';

class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <AboutScreenHeader navigation={navigation} />

        <Container style={StyleSheet.flatten(styles.insideContainer)}>
          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Text style={StyleSheet.flatten(styles.textVersion)}>
              Versi 1.0.0
            </Text>
          </View>
        </Container>
      </Container>
    );
  }
}

export default AboutScreen;
