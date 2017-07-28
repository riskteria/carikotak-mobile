import React, { Component } from 'react';
import { Container } from 'native-base';

import { API } from 'services/APIService';

import ProductListScreenHeader from './ProductListScreenHeader';
import ProductList from './ProductList';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

class ProductListScreen extends Component {
  constructor(props) {
    super(props);

    this._onRefresh = this._onRefresh.bind(this);
    this._onFetchProducts = this._onFetchProducts.bind(this);
    this._fetchProductsByCategory = this._fetchProductsByCategory.bind(this);
    this._fetchAllCategories = this._fetchAllCategories.bind(this);

    this.state = {
      products: [],
      categories: [],
      refreshing: false,
      loadingSpin: false
    };
  }

  _fetchAllProducts() {
    API.get('api/product')
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

  _fetchProductsByCategory(categoryId) {
    API.get('api/product?category=' + categoryId)
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
    API.get('api/category')
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

    if (params.hasOwnProperty('categoryId')) {
      const categoryId = params.categoryId;
      this.setState({ loadingSpin: true, refreshing: true });
      this._fetchProductsByCategory(categoryId);
    }
  }

  _onRefresh() {
    const { navigation } = this.props;
    const params = navigation.state.params;

    if (!params) {
      return;
    }

    if (params.hasOwnProperty('categoryId')) {
      const categoryId = params.categoryId;
      this.setState({ refreshing: true });
      this._fetchProductsByCategory(categoryId);
    }
  }

  componentWillMount() {
    this._fetchAllCategories();
    this._onFetchProducts();
  }

  render() {
    const { loadingSpin, products, categories } = this.state;
    const { navigation } = this.props;

    const ProductListWrapper = () =>
      <Container>
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
