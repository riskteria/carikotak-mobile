import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container } from 'native-base';

import CreateProductForm from './CreateProductForm';
import CreateProductHeader from './CreateProductHeader';

import styles from './styles';

class CreateProductScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <CreateProductHeader navigation={navigation} />

        <ScrollView>
          <CreateProductForm navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }
}

export default CreateProductScreen;
