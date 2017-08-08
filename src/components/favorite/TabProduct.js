import React, { Component } from 'react';
import { Container } from 'native-base';

import ProductList from './ProductList';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import { API } from 'services/APIService';

class TabStory extends Component {
  constructor(props) {
    super(props);

    this._onFetchFavorites = this._onFetchFavorites.bind(this);
    this._onRefresh = this._onRefresh.bind(this);

    this.state = {
      products: [],
      refreshing: false,
      loadingSpinner: false
    };
  }

  _onRefresh() {
    this.setState({ refreshing: true });

    API()
      .get('api/me/favorite-products')
      .then(res => {
        this.setState({ refreshing: false, products: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        throw err;
      });
  }

  _onFetchFavorites() {
    this.setState({ loadingSpinner: true });

    API()
      .get('api/me/favorite-products')
      .then(res => {
        this.setState({ loadingSpinner: false, products: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpinner: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onFetchFavorites();
  }

  render() {
    const { navigation } = this.props;
    const { loadingSpinner, products } = this.state;

    return (
      <Container>
        {loadingSpinner
          ? <ProgressBar />
          : <ProductList
              navigation={navigation}
              products={products}
              _onRefresh={this._onRefresh}
              refreshing={this.state.refreshing}
            />}
      </Container>
    );
  }
}

export default TabStory;
