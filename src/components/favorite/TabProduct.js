import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import CardProduct from './CardProduct';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import { API } from 'services/APIService';

class TabStory extends Component {
  constructor(props) {
    super(props);

    this._onFetchFavorites = this._onFetchFavorites.bind(this);

    this.state = {
      favorites: [],
      loadingSpinner: false
    };
  }

  _onFetchFavorites() {
    this.setState({ loadingSpinner: true });

    API.get('api/me/favorite-products')
      .then(res => {
        this.setState({ loadingSpinner: false, favorites: res.data });
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
    const { navigate } = this.props;
    const { loadingSpinner, favorites } = this.state;

    const ProductCard = favorites.map((product, index) =>
      <TouchableOpacity
        activeOpacity={0.9}
        key={index}
        onPress={() => navigate('Product', { slug: product.slug })}
      >
        <CardProduct key={index} product={product} />
      </TouchableOpacity>
    );

    return (
      <ScrollView>
        {loadingSpinner ? <ProgressBar /> : ProductCard}
      </ScrollView>
    );
  }
}

export default TabStory;
