import React, { Component } from 'react';
import { Modal } from 'react-native';
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Container,
  Content
} from 'native-base';

import colors from 'styles/_colors';

import { API } from 'services/APIService';

class ProductListModalFilter extends Component {
  constructor(props) {
    super(props);

    this._fetchAllLocation = this._fetchAllLocation.bind(this);

    this.state = {
      loadingSpin: false,
      selectedProvince: {
        id: '',
        name: ''
      },
      selectedCity: {
        id: '',
        name: ''
      },
      locations: [],
      cities: []
    };
  }

  _fetchAllLocation() {
    this.setState({ loadingSpin: true });
    API.get('api/location?get=province&with=cities')
      .then(res => {
        this.setState({ loadingSpin: false, locations: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  render() {
    const { modalFilterVisible, _onModalFilterToggled } = this.props;

    return (
      <Modal
        onShow={() => this._fetchAllLocation()}
        animationType={'slide'}
        transparent={false}
        visible={modalFilterVisible}
        onRequestClose={() => _onModalFilterToggled()}
      >
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Left style={{ flex: 0.16 }}>
            <Button transparent dark onPress={() => _onModalFilterToggled()}>
              <Icon name="md-close" />
            </Button>
          </Left>
          <Body>
            <Text>Filter Modal</Text>
          </Body>
        </Header>
        <Container>
          <Content>
            <Text>Hello</Text>
          </Content>
        </Container>
      </Modal>
    );
  }
}

export default ProductListModalFilter;
