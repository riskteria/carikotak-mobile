import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import CardProduct from './CardProduct';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

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

    setTimeout(() => {
      this.setState({ loadingSpinner: false });
    }, 1000);
  }

  componentWillMount() {
    this._onFetchFavorites();
  }

  render() {
    const { navigate } = this.props;
    const { loadingSpinner } = this.state;

    const ProductNumber = [1, 2, 3, 4, 5];

    const ProductCard = ProductNumber.map((number, index) =>
      <TouchableOpacity
        activeOpacity={0.9}
        key={index}
        onPress={() => navigate('Product')}
      >
        <CardProduct key={index} />
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
