import React, { Component } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Container, Item, Text, List, Button } from 'native-base';

import styles from './styles';

class StoryScreenOptionModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      modalOptionVisible,
      product,
      navigation,
      _onModalOptionToggled
    } = this.props;
    const { navigate } = navigation;

    return (
      <Modal
        transparent={true}
        visible={modalOptionVisible}
        onRequestClose={_onModalOptionToggled}
        animationType={'none'}
      >
        <Container style={StyleSheet.flatten(styles.modalOptionContainer)}>
          <List style={StyleSheet.flatten(styles.modalOptionList)}>
            <Item>
              <Button block transparent dark>
                <Text>Edit</Text>
              </Button>
            </Item>
            <Item>
              <Button block transparent dark>
                <Text>Hapus</Text>
              </Button>
            </Item>
          </List>
        </Container>
      </Modal>
    );
  }
}

export default StoryScreenOptionModal;
