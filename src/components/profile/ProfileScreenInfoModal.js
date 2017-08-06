import React, { Component } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Container, Content, Text, H2 } from 'native-base';

import styles from './styles';

class ProfileScreenInfoModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modalInfoVisible, _onModalInfoToggled, user } = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalInfoVisible}
        onRequestClose={() => _onModalInfoToggled()}
      >
        <Container style={StyleSheet.flatten(styles.modalBackdrop)}>
          <Content style={StyleSheet.flatten(styles.modalBody)}>
            <Content style={StyleSheet.flatten(styles.infoSection)}>
              <H2 style={StyleSheet.flatten(styles.textCenter)}>
                {user.name}
              </H2>
            </Content>
            <Content style={StyleSheet.flatten(styles.infoSection)}>
              <Text style={StyleSheet.flatten(styles.textCenter)}>
                {user.description}
              </Text>
            </Content>
            <Content style={StyleSheet.flatten(styles.infoSection)}>
              {user.province
                ? <Text style={StyleSheet.flatten(styles.textCenter)}>
                    {user.province.name}
                  </Text>
                : null}
              {user.city
                ? <Text style={StyleSheet.flatten(styles.textCenter)}>
                    {user.city.name}
                  </Text>
                : null}
            </Content>
          </Content>
        </Container>
      </Modal>
    );
  }
}

export default ProfileScreenInfoModal;
