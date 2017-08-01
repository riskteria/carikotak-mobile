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

class SearchScreenHeaderLocation extends Component {
  constructor(props) {
    super(props);

    this._onCityValueChanged = this._onCityValueChanged.bind(this);
    this._onProvinceValueChanged = this._onProvinceValueChanged.bind(this);
    this._fetchAllLocation = this._fetchAllLocation.bind(this);

    this.state = {
      selectedProvince: {
        id: '',
        name: ''
      },
      selectedCity: {
        name: '',
        id: ''
      },
      loadingSpin: false,
      locations: [],
      cities: []
    };
  }

  _onCityValueChanged(city, index) {
    const selectedCity = this.state.cities.find(c => c.id === city);

    this.setState({
      selectedCity: { id: selectedCity.id, name: selectedCity.name }
    });
  }

  _onProvinceValueChanged(province, index) {
    const selectedProvince = this.state.locations.find(
      location => location.id === province
    );
    this.setState({
      selectedProvince: { id: selectedProvince.id, name: selectedProvince.name }
    });
    this.setState({ cities: selectedProvince.cities });
  }

  _fetchAllLocation() {
    this.setState({ loadingSpin: true });
    API()
      .get('api/location?get=province&with=cities')
      .then(res => {
        this.setState({ loadingSpin: false, locations: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  componentWillMount() {
    this._fetchAllLocation();
  }

  render() {
    const {
      locations,
      cities,
      loadingSpin,
      selectedProvince,
      selectedCity
    } = this.state;

    const {
      modalLocationVisible,
      _onModalLocationCloseRequested,
      _onLocationChanged
    } = this.props;

    const ProvincePicker = () =>
      <Picker
        selectedValue={selectedProvince.id}
        onValueChange={this._onProvinceValueChanged}
      >
        <Picker.Item value="" label="Select your province" />
        {ProvinceItemPicker()}
      </Picker>;

    const ProvinceItemPicker = () =>
      locations.map((province, index) =>
        <Picker.Item label={province.name} value={province.id} key={index} />
      );

    const CityPicker = () =>
      <Picker
        selectedValue={selectedCity.id}
        onValueChange={this._onCityValueChanged}
      >
        <Picker.Item value="" label="Select your city" />
        {CityItemPicker()}
      </Picker>;

    const CityItemPicker = () =>
      cities.map((city, index) =>
        <Picker.Item label={city.name} value={city.id} key={index} />
      );

    const LocationPicker = () =>
      <Content style={{ padding: 16 }}>
        <ProvincePicker />
        <CityPicker />
        <Button
          block
          onPress={() => _onLocationChanged(selectedProvince, selectedCity)}
        >
          <Text>Change</Text>
        </Button>
      </Content>;

    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalLocationVisible}
        onRequestClose={() => _onModalLocationCloseRequested()}
      >
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Left style={{ flex: 0.16 }}>
            <Button
              transparent
              dark
              onPress={() => _onModalLocationCloseRequested()}
            >
              <Icon name="md-close" />
            </Button>
          </Left>
          <Body>
            <Text>Select your location</Text>
          </Body>
        </Header>
        <Container>
          {loadingSpin ? <ProgressBar /> : <LocationPicker />}
        </Container>
      </Modal>
    );
  }
}

export default SearchScreenHeaderLocation;
