import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Text } from 'native-base';

import { API } from 'components/_shared/progress-bar/ProgressBar';

import ProductListScreenHeader from './ProductListScreenHeader';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

class ProductListScreen extends Component {
  constructor(props) {
    super(props);

    this._onFetchProducts = this._onFetchProducts.bind(this);

    this.state = {
      products: [],
      loadingSpin: false
    };
  }

  _onFetchProducts() {
    this.setState({ loadingSpin: true });

    API.get('api/product')
      .then(res => {
        this.setState({ loadingSpin: false, products: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  render() {
    const { loadingSpin } = this.state;
    const { navigation } = this.props;

    const ProductList = () => <Text>Daftar Produk</Text>;

    return (
      <Container>
        <ProductListScreenHeader navigation={navigation} />

        <ScrollView>
          {loadingSpin ? <ProgressBar /> : <ProductList />}
        </ScrollView>
      </Container>
    );
  }
}

export default ProductListScreen;
