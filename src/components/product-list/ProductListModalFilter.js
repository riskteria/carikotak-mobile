import React, { Component } from 'react';
import { Modal, Picker } from 'react-native';
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

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import colors from 'styles/_colors';

import { API } from 'services/APIService';

class ProductListModalFilter extends Component {
  constructor(props) {
    super(props);

    this._onCityValueChanged = this._onCityValueChanged.bind(this);
    this._onProvinceValueChanged = this._onProvinceValueChanged.bind(this);
    this._fetchAllLocation = this._fetchAllLocation.bind(this);

    this.state = {
      loadingSpin: false,
      province: '',
      city: '',
      locations: [],
      cities: []
    };
  }

  _onCityValueChanged(city, index) {
    this.setState({ city });
  }

  _onProvinceValueChanged(province, index) {
    const selectedProvince = this.state.locations.find(
      location => location.id === province
    );
    this.setState({ province });

    this.setState({
      cities: selectedProvince.cities
    });
  }

  _fetchAllLocation() {
    this.setState({
      loadingSpin: true
    });
    API.get('api/location?get=province&with=cities')
      .then(res => {
        this.setState({
          loadingSpin: false,
          locations: res.data
        });
      })
      .catch(err => {
        this.setState({
          loadingSpin: false
        });
        throw err;
      });
  }

  _fetchAllCategories() {}

  render() {
    const { loadingSpin, province, city, locations, cities } = this.state;

    const {
      modalFilterVisible,
      _onModalFilterToggled,
      _onFilterChanged
    } = this.props;

    const ProvincePicker = () =>
      <Picker
        selectedValue={province}
        onValueChange={this._onProvinceValueChanged}
      >
        <Picker.Item label="Pilih Provinsi" value="" />
        {locations.map((location, index) =>
          <Picker.Item label={location.name} value={location.id} key={index} />
        )}
      </Picker>;

    const CityPicker = () =>
      <Picker selectedValue={city} onValueChange={this._onCityValueChanged}>
        <Picker.Item label="Pilih Kota" value="" />
        {cities.map((c, index) =>
          <Picker.Item label={c.name} value={c.id} key={index} />
        )}
      </Picker>;

    const LocationPicker = () =>
      <Content
        style={{
          padding: 16
        }}
      >
        <ProvincePicker />
        <CityPicker />
        <Button block onPress={() => _onFilterChanged(province, city)}>
          <Text> Ubah Filter </Text>
        </Button>
      </Content>;

    const ModalFilter = () =>
      <Content>
        <LocationPicker />
      </Content>;

    return (
      <Modal
        onShow={() => this._fetchAllLocation()}
        animationType={'slide'}
        transparent={false}
        visible={modalFilterVisible}
        onRequestClose={() => _onModalFilterToggled()}
      >
        <Header
          style={{
            backgroundColor: colors.colorLight,
            elevation: 1
          }}
        >
          <Left
            style={{
              flex: 0.16
            }}
          >
            <Button transparent dark onPress={() => _onModalFilterToggled()}>
              <Icon name="md-close" />
            </Button>
          </Left>
          <Body>
            <Text> Filter Modal </Text>
          </Body>
        </Header>
        <Container>
          {loadingSpin ? <ProgressBar /> : <ModalFilter />}
        </Container>
      </Modal>
    );
  }
}

export default ProductListModalFilter;
