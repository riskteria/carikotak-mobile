import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import ProductList from './ProductList';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import { API } from 'services/APIService';

class ProfileTabProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingSpin: false,
      refreshing: false,
      products: []
    };

    this._fetchUserProducts = this._fetchUserProducts.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  _fetchUserProducts() {
    const { user } = this.props;
    this.setState({ loadingSpin: false });
    API()
      .get(`api/product?user=${user.id}`)
      .then(res => {
        this.setState({ loadingSpin: false, products: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onRefresh() {
    const { user } = this.props;
    this.setState({ refreshing: true });

    API()
      .get(`api/product?user=${user.id}`)
      .then(res => {
        this.setState({ refreshing: false, products: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        throw err;
      });
  }

  componentWillMount() {
    this._fetchUserProducts();
  }

  render() {
    const { loadingSpinner, products, refreshing } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        {loadingSpinner
          ? <ProgressBar />
          : <ProductList
              navigation={navigation}
              products={products}
              _onRefresh={this._onRefresh}
              refreshing={refreshing}
            />}
      </Container>
    );
  }
}

export default ProfileTabProduct;
