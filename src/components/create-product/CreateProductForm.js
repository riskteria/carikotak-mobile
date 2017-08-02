import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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

import styles from './styles';

class CreateProductForm extends Component {
  constructor(props) {
    super(props);

    this._onProductSubmit = this._onProductSubmit.bind(this);

    this.state = {
      product: {
        name: '',
        price: '',
        category_id: '',
        image: [],
        material: '',
        condition: '',
        description: '',
        type: this.props.navigation.state.params.type
      }
    };
  }

  _onProductSubmit() {
    console.log(this.state.product);
  }

  _onChangeText(propertyName, value) {
    console.log(this.state.product);
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

  render() {
    const { product } = this.state;
    const { categories, materials, conditions } = this.props;

    const MaterialPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={product.material}
        onValueChange={value =>
          this.setState({
            product: Object.assign({}, product, { material: value })
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

export default CreateProductForm;
