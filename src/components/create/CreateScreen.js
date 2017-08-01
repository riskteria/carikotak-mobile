import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Header,
  Title,
  Body
} from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';

class CreateScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <Container style={StyleSheet.flatten(styles.parentView)}>
        <Header style={{ backgroundColor: '#fff', elevation: 1 }}>
          <Body style={{ alignItems: 'flex-start', flex: 1 }}>
            <Title style={{ color: colors.colorDark }}>Kiriman Baru</Title>
          </Body>
        </Header>
        <Content style={StyleSheet.flatten(styles.buttonWrapper)}>
          <Button
            block
            bordered
            style={StyleSheet.flatten(styles.buttonContainer)}
            onPress={() => navigate('CreateProduct', { type: 'jual' })}
          >
            <Text style={StyleSheet.flatten(styles.buttonText)}>
              Jual Produk
            </Text>
          </Button>
          <Button
            block
            bordered
            style={StyleSheet.flatten(styles.buttonContainer)}
            onPress={() => navigate('CreateProduct', { type: 'cari' })}
          >
            <Text style={StyleSheet.flatten(styles.buttonText)}>
              Cari Produk
            </Text>
          </Button>
          <Button
            block
            bordered
            style={StyleSheet.flatten(styles.buttonContainer)}
            onPress={() => navigate('CreateStory')}
          >
            <Text style={StyleSheet.flatten(styles.buttonText)}>
              Tambah Cerita
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default CreateScreen;
