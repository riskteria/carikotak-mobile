import React, { Component } from 'react';
import { ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import EditProductForm from './EditProductForm';
import EditProductHeader from './EditProductHeader';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import styles from './styles';

import { API } from 'services/APIService';

class EditProductScreen extends Component {
  constructor(props) {
    super(props);

    this._fetchProductDetail = this._fetchProductDetail.bind(this);
    this._fetchProductCategory = this._fetchProductCategory.bind(this);
    this._fetchProductMaterial = this._fetchProductMaterial.bind(this);

    this.state = {
      loadingSpin: false,
      categories: [],
      materials: [],
      conditions: [
        { value: 'new', label: 'Baru' },
        { value: 'second', label: 'Bekas' }
      ]
    };
  }

  _fetchProductCategory() {
    API()
      .get('api/category')
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
    API()
      .get('api/material')
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
    const { loadingSpin, categories, materials, conditions } = this.state;
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <EditProductHeader navigation={navigation} />

        {loadingSpin
          ? <ProgressBar />
          : <ScrollView>
              <EditProductForm
                navigation={navigation}
                categories={categories}
                materials={materials}
                conditions={conditions}
              />
            </ScrollView>}
      </Container>
    );
  }
}

export default EditProductScreen;
