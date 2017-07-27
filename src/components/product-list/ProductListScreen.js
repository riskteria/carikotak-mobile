import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Text, View } from 'native-base';

import { API } from 'services/APIService';

import ProductListScreenHeader from './ProductListScreenHeader';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

class ProductListScreen extends Component {
  constructor(props) {
    super(props);

    this._onFetchProducts = this._onFetchProducts.bind(this);
    this._fetchProductsByCategory = this._fetchProductsByCategory.bind(this);

    this.state = {
      products: [],
      loadingSpin: false
    };
  }

  _fetchAllProducts() {
    API.get('api/product')
      .then(res => {
        this.setState({ loadingSpin: false, products: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  _fetchProductsByCategory(categoryId) {
    API.get('api/product?category=' + categoryId)
      .then(res => {
        this.setState({ loadingSpin: false, products: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  _onFetchProducts() {
    const { navigation } = this.props;
    const params = navigation.state.params;

    this.setState({ loadingSpin: true });

    if (params.hasOwnProperty('categoryId')) {
      const categoryId = params.categoryId;
      this._fetchProductsByCategory(categoryId);
    }
  }

  componentWillMount() {
    this._onFetchProducts();
  }

  render() {
    const { loadingSpin, products } = this.state;
    const { navigation } = this.props;

    const ProductList = () =>
      <View>
        <ScrollView>
          <Text>
            Product List, Total: {products.length}
          </Text>
        </ScrollView>
      </View>;

    return (
      <Container>
        <ProductListScreenHeader navigation={navigation} />

        {loadingSpin ? <ProgressBar /> : <ProductList />}
      </Container>
    );
  }
}

export default ProductListScreen;
