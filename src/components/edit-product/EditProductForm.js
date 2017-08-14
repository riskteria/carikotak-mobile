import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import {
  Content,
  Input,
  Picker,
  Label,
  Item,
  View,
  Button,
  Text
} from 'native-base';

import EditProductColorPicker from './EditProductColorPicker';

import styles from './styles';
import { API } from 'services/APIService';

class EditProductForm extends Component {
  constructor(props) {
    super(props);

    this._onProductSubmit = this._onProductSubmit.bind(this);

    this.state = {
      product: {
        name: '',
        price: '',
        category_id: '',
        image: [],
        color: [],
        material_id: '',
        condition: '',
        description: '',
        type: this.props.navigation.state.params.type
      },
      modalColorVisible: false
    };

    this._onModalColorToggled = this._onModalColorToggled.bind(this);
    this._onColorSelected = this._onColorSelected.bind(this);
    this._onRemoveColorPressed = this._onRemoveColorPressed.bind(this);
  }

  _onRemoveColorPressed(index) {
    const { product } = this.state;
    product.color.splice(index, 1);

    this.setState({ product });
  }

  _onColorSelected(color) {
    const { product } = this.state;
    product.color.push(color);

    this.setState({ product });

    this._onModalColorToggled();
  }

  _onModalColorToggled() {
    this.setState({ modalColorVisible: !this.state.modalColorVisible });
  }

  _onProductSubmit() {
    const { product } = this.state;
    const { navigation } = this.props;
    const { navigate } = navigation;

    API()
      .put('api/product/' + product.id, product)
      .then(res => {
        navigate('Product', { slug: res.data.product.slug });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  _onChangeText(propertyName, value) {
    switch (propertyName) {
      case 'name':
        this.setState({
          product: Object.assign({}, this.state.product, { name: value })
        });
        break;

      case 'price':
        this.setState({
          product: Object.assign({}, this.state.product, { price: value })
        });
        break;

      case 'description':
        this.setState({
          product: Object.assign({}, this.state.product, { description: value })
        });
        break;
    }
  }

  componentWillMount() {
    const { slug } = this.props.navigation.state.params;
    API()
      .get('api/product/' + slug)
      .then(res => {
        this.setState({ product: res.data });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  render() {
    const { product, modalColorVisible } = this.state;
    const { categories, materials, conditions } = this.props;

    const MaterialPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={product.material}
        onValueChange={value =>
          this.setState({
            product: Object.assign({}, product, { material_id: value })
          })}
      >
        <Picker.Item label="Pilih material" value="" />
        {materials.map((material, index) =>
          <Picker.Item label={material.label} value={material.id} key={index} />
        )}
      </Picker>;

    const CategoryPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={product.category_id}
        onValueChange={value =>
          this.setState({
            product: Object.assign({}, product, {
              category_id: value
            })
          })}
      >
        <Picker.Item label="Pilih kategori" value="" />
        {categories.map((category, index) =>
          <Picker.Item label={category.name} value={category.id} key={index} />
        )}
      </Picker>;

    const ConditionPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={product.condition}
        onValueChange={value =>
          this.setState({
            product: Object.assign({}, product, { condition: value })
          })}
      >
        <Picker.Item label="Pilih kondisi" value="" />
        {conditions.map((condition, index) =>
          <Picker.Item
            label={condition.label}
            value={condition.value}
            key={index}
          />
        )}
      </Picker>;

    return (
      <Content style={StyleSheet.flatten(styles.formContaienr)}>
        <Item stackedLabel style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>
            Nama kotak
          </Label>
          <Input
            defaultValue={product.name}
            onChangeText={this._onChangeText.bind(this, 'name')}
          />
        </Item>

        <Item stackedLabel style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>Harga</Label>
          <Input
            keyboardType="numeric"
            defaultValue={product.price}
            placeholder="Rp. "
            onChangeText={this._onChangeText.bind(this, 'price')}
          />
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

        <View style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>Warna</Label>

          <View style={{ paddingVertical: 16, flexDirection: 'row' }}>
            {product.color.map((color, index) =>
              <Button
                small
                onPress={() => this._onRemoveColorPressed(index)}
                key={index}
                style={{ marginHorizontal: 8, backgroundColor: color }}
              />
            )}
            <Button
              small
              light
              onPress={() => this._onModalColorToggled()}
              style={{ marginHorizontal: 8 }}
            >
              <Text>+</Text>
            </Button>
          </View>

          <EditProductColorPicker
            modalColorVisible={modalColorVisible}
            _onModalColorToggled={this._onModalColorToggled}
            _onColorSelected={this._onColorSelected}
          />
        </View>

        <Item stackedLabel style={StyleSheet.flatten(styles.sectionContainer)}>
          <Label style={StyleSheet.flatten(styles.labelControl)}>
            Keterangan
          </Label>
          <Input
            multiline={true}
            numberOfLines={2}
            defaultValue={this.state.product.description}
            onChangeText={this._onChangeText.bind(this, 'description')}
          />
        </Item>

        <Button block bordered onPress={() => this._onProductSubmit()}>
          <Text>Pasang</Text>
        </Button>
      </Content>
    );
  }
}

export default EditProductForm;
