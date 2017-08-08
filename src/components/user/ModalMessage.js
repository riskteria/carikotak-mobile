import React, { Component } from 'react';
import { Modal, StyleSheet } from 'react-native';
import {
  Container,
  Text,
  Form,
  Input,
  Button,
  Left,
  Thumbnail,
  ListItem,
  Body
} from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';

import styles from './styles';

class ModalMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        user_id: this.props.user.id,
        text: ''
      }
    };
  }

  render() {
    const {
      modalMessageVisible,
      _onModalMessageToggled,
      _onMessageSend,
      user
    } = this.props;

    return (
      <Modal
        transparent={true}
        visible={modalMessageVisible}
        onRequestClose={_onModalMessageToggled}
        animationType={'none'}
      >
        <Container style={StyleSheet.flatten(styles.messageCardContainer)}>
          <Form style={{ backgroundColor: '#ffffff', borderRadius: 4 }}>
            <ListItem>
              <Left>
                <Thumbnail small source={{ uri: loadImageUser(user.avatar) }} />
                <Text style={{ color: '#000000' }}>
                  {user.name}
                </Text>
              </Left>
            </ListItem>
            <ListItem>
              <Input
                onChangeText={text =>
                  this.setState({
                    message: Object.assign({}, this.state.message, { text })
                  })}
                multiline={true}
                numberOfLines={3}
                placeholder="Tuliskan sesuatu"
                style={StyleSheet.flatten(styles.messageCardInput)}
              />
            </ListItem>
            <Button
              block
              transparent
              dark
              onPress={() => _onMessageSend(this.state.message)}
            >
              <Text>Kirim Pesan</Text>
            </Button>
          </Form>
        </Container>
      </Modal>
    );
  }
}

export default ModalMessage;
