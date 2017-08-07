import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Container, Text, Content } from 'native-base';

import { TriangleColorPicker } from 'react-native-color-picker';

class CreateProductColorPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      modalColorVisible,
      _onModalColorToggled,
      _onColorSelected
    } = this.props;

    return (
      <Modal
        transparent={true}
        visible={modalColorVisible}
        animationType={'none'}
        onRequestClose={() => _onModalColorToggled()}
      >
        <Container style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <Container
            style={{
              backgroundColor: '#fff',
              borderRadius: 4,
              padding: 32,
              margin: 32
            }}
          >
            <Text>Pick Color</Text>

            <TriangleColorPicker
              oldColor="purple"
              onColorSelected={_onColorSelected}
              style={{ flex: 1 }}
            />
          </Container>
        </Container>
      </Modal>
    );
  }
}

export default CreateProductColorPicker;
