import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import queryString from 'query-string';

import { API } from 'services/APIService';

import ProductListScreenHeader from './ProductListScreenHeader';
import ProductList from './ProductList';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import styles from './styles';

class ProductListScreen extends Component {
  constructor(props) {
    super(props);

    this._onRefresh = this._onRefresh.bind(this);
    this._onFetchProducts = this._onFetchProducts.bind(this);
    this._fetchProductsByParams = this._fetchProductsByParams.bind(this);
    this._fetchAllCategories = this._fetchAllCategories.bind(this);

    this.state = {
      products: [],
      categories: [],
      refreshing: false,
      loadingSpin: false
    };
  }

  _fetchAllProducts() {
    API()
      .get('api/product')
      .then(res => {
        this.setState({
          loadingSpin: false,
          refreshing: false,
          products: res.data
        });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  _fetchProductsByParams(params) {
    const query = queryString.stringify(params);
    API()
      .get('api/product?' + query)
      .then(res => {
        this.setState({
          refreshing: false,
          loadingSpin: false,
          products: res.data
        });
      })
      .catch(err => {
        this.setState({ refreshing: false, loadingSpin: false });
        throw err;
      });
  }

  _fetchAllCategories() {
    API()
      .get('api/category')
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => {
        throw err;
      });
  }

  _onFetchProducts() {
    const { navigation } = this.props;
    const params = navigation.state.params;

    if (!params) {
      return;
    }

    this.setState({ loadingSpin: true });

    this._fetchProductsByParams(params);
  }

  _onRefresh() {
    const { navigation } = this.props;
    const params = navigation.state.params;

    if (!params) {
      return;
    }
    this.setState({ refreshing: true });

    this._fetchProductsByParams(params);
  }

  componentWillMount() {
    this._fetchAllCategories();
    this._onFetchProducts();
  }

  render() {
    const { loadingSpin, products, categories } = this.state;
    const { navigation } = this.props;

    const ProductListWrapper = () =>
      <Container style={StyleSheet.flatten(styles.productListScreenContainer)}>
        <ProductList
          navigation={navigation}
          categories={categories}
          products={products}
          _onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
        />
      </Container>;

    return (
      <Container>
        <ProductListScreenHeader navigation={navigation} />

        {loadingSpin ? <ProgressBar /> : <ProductListWrapper />}
      </Container>
    );
  }
}

export default ProductListScreen;
