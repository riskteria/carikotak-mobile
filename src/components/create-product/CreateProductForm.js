import React, { Component } from 'react';
import { ToastAndroid, StyleSheet } from 'react-native';
import { Content, Input, Picker, Label, Item, View } from 'native-base';

import styles from './styles';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import { API } from 'services/APIService';

class CreateProductForm extends Component {
  constructor(props) {
    super(props);

    this._fetchProductDetail = this._fetchProductDetail.bind(this);
    this._fetchProductCategory = this._fetchProductCategory.bind(this);
    this._fetchProductMaterial = this._fetchProductMaterial.bind(this);

    this.state = {
      loadingSpin: false,
      categories: [],
      materials: [],
      condition: ''
    };
  }

  _fetchProductCategory() {
    API.get('api/category')
      .then(res => {
        this.setState({ categories: res.data });
        this._fetchProductMaterial();
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _fetchProductMaterial() {
    API.get('api/material')
      .then(res => {
        this.setState({ loadingSpin: false, materials: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _fetchProductDetail() {
    this.setState({ loadingSpin: true });
    this._fetchProductCategory();
  }

  componentWillMount() {
    this._fetchProductDetail();
  }

  render() {
    const { loadingSpin, categories, materials, condition } = this.state;

    const ProductForm = () =>
      <Content style={StyleSheet.flatten(styles.formContaienr)}>
        <Item stackedLabel style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>
            Nama kotak
          </Label>
          <Input />
        </Item>

        <Item stackedLabel style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>Harga</Label>
          <Input placeholder="Rp. " />
        </Item>

        <View style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>
            Kategori
          </Label>
          <CategoryPicker />
        </View>

        <View style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>
            Material
          </Label>
          <MaterialPicker />
        </View>

        <View style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>Kondisi</Label>
          <ConditionPicker />
        </View>

        <Item stackedLabel style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>
            Keterangan
          </Label>
          <Input multiline={true} numberOfLines={2} />
        </Item>
      </Content>;

    const MaterialPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={condition}
        onValueChange={value => this.setState({ condition: value })}
      >
        <Picker.Item label="Ivory" value="new" />
        <Picker.Item label="Bekas" value="second" />
      </Picker>;

    const CategoryPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={condition}
        onValueChange={value => this.setState({ condition: value })}
      >
        <Picker.Item label="Kotak Hadiah" value="new" />
        <Picker.Item label="Bekas" value="second" />
      </Picker>;

    const ConditionPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={condition}
        onValueChange={value => this.setState({ condition: value })}
      >
        <Picker.Item label="Baru" value="new" />
        <Picker.Item label="Bekas" value="second" />
      </Picker>;

    return (
      <Content>
        {loadingSpin ? <ProgressBar /> : <ProductForm />}
      </Content>
    );
  }
}

export default CreateProductForm;
