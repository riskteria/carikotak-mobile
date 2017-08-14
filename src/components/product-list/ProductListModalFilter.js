import React, { Component } from 'react';
import { Modal, ToastAndroid } from 'react-native';
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Container,
  Picker,
  Form
} from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import colors from 'styles/_colors';

import { API } from 'services/APIService';

class ProductListModalFilter extends Component {
  constructor(props) {
    super(props);

    this._onMaterialValueChanged = this._onMaterialValueChanged.bind(this);
    this._onConditionValueChanged = this._onConditionValueChanged.bind(this);
    this._onTypeValueChanged = this._onTypeValueChanged.bind(this);
    this._onCityValueChanged = this._onCityValueChanged.bind(this);
    this._onProvinceValueChanged = this._onProvinceValueChanged.bind(this);
    this._fetchAllLocation = this._fetchAllLocation.bind(this);
    this._fetchAllMaterials = this._fetchAllMaterials.bind(this);

    this.state = {
      loadingSpin: true,

      locations: [],
      cities: [],
      province: '',
      material: '',
      city: '',
      type: '',
      condition: '',
      materials: []
    };
  }

  _onMaterialValueChanged(material, index) {
    this.setState({ material });
  }

  _onTypeValueChanged(type, index) {
    this.setState({ type });
  }

  _onConditionValueChanged(condition, index) {
    this.setState({ condition });
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
    API()
      .get('api/location?get=province&with=cities')
      .then(res => {
        this.setState({
          loadingSpin: false,
          locations: res.data
        });
        this._fetchAllMaterials();
      })
      .catch(err => {
        this.setState({
          loadingSpin: false
        });
        throw err;
      });
  }

  _fetchAllMaterials() {
    API()
      .get('api/material')
      .then(res => {
        this.setState({ materials: res.data });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  _fetchAllCategories() {}

  render() {
    const {
      loadingSpin,
      province,
      city,
      locations,
      cities,
      type,
      condition,
      material,
      materials
    } = this.state;

    const {
      modalFilterVisible,
      _onModalFilterToggled,
      _onFilterChanged
    } = this.props;

    const MaterialPicker = () =>
      <Picker
        selectedValue={material}
        onValueChange={this._onMaterialValueChanged}
      >
        <Picker.Item label="Pilih Material" value="" />
        {materials.map((m, index) =>
          <Picker.Item label={m.label} value={m.id} key={index} />
        )}
      </Picker>;

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

    const TypePicker = () =>
      <Picker selectedValue={type} onValueChange={this._onTypeValueChanged}>
        <Picker.Item label="Jual" value="jual" />
        <Picker.Item label="Cari" value="cari" />
      </Picker>;

    const ConditionPicker = () =>
      <Picker
        selectedValue={condition}
        onValueChange={this._onConditionValueChanged}
      >
        <Picker.Item label="Baru" value="new" />
        <Picker.Item label="Bekas" value="second" />
      </Picker>;

    const ModalFilter = () =>
      <Form style={{ padding: 16 }}>
        <TypePicker />
        <ConditionPicker />
        <MaterialPicker />
        <Button
          block
          onPress={() => _onFilterChanged(province, city, type, condition)}
        >
          <Text> Ubah Filter </Text>
        </Button>
      </Form>;

    return (
      <Modal
        onShow={() => this._fetchAllLocation()}
        animationType={'none'}
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
