import React, { Component } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Container, Item, Text, List, Button } from 'native-base';

import styles from './styles';

class ProductScreenOptionModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      modalOptionVisible,
      _onModalOptionToggled,
      _onOptionDeletePressed
    } = this.props;

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
              <Button
                block
                transparent
                dark
                onPress={() => _onOptionDeletePressed()}
              >
                <Text>Hapus</Text>
              </Button>
            </Item>
          </List>
        </Container>
      </Modal>
    );
  }
}

export default ProductScreenOptionModal;
