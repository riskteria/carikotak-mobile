import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Body, Left, Button, Icon, Text } from 'native-base';

import SearchScreenHeaderLocation from './SearchScreenHeaderLocation';
import colors from 'styles/_colors';

class SearchScreenHeader extends Component {
  constructor(props) {
    super(props);

    this._onModalLocationCloseRequested = this._onModalLocationCloseRequested.bind(
      this
    );
    this._onModalLocationOpenRequested = this._onModalLocationOpenRequested.bind(
      this
    );

    this._onLocationChanged = this._onLocationChanged.bind(this);

    this.state = {
      modalLocationVisible: false,
      province: {
        id: '',
        name: ''
      },
      city: {
        id: '',
        name: ''
      }
    };
  }

  _onLocationChanged(province, city) {
    this.setState({ province, city });
    this._onModalLocationCloseRequested();
  }

  _onModalLocationCloseRequested() {
    this.setState({ modalLocationVisible: false });
  }

  _onModalLocationOpenRequested() {
    this.setState({ modalLocationVisible: true });
  }

  render() {
    const { modalLocationVisible, province, city } = this.state;
    const { navigation } = this.props;
    const { goBack } = navigation;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left style={{ flex: 0.16 }}>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._onModalLocationOpenRequested()}
          >
            <Text style={{ color: colors.colorDark }}>Lokasi anda</Text>
            <Text note>
              {!province.name && !city.name
                ? 'Pilih Lokasi Anda'
                : (province.name && city.name
                    ? province.name + ', '
                    : province.name) + city.name}
            </Text>
          </TouchableOpacity>
        </Body>

        <SearchScreenHeaderLocation
          modalLocationVisible={modalLocationVisible}
          _onLocationChanged={this._onLocationChanged}
          _onModalLocationCloseRequested={this._onModalLocationCloseRequested}
        />
      </Header>
    );
  }
}

export default SearchScreenHeader;
