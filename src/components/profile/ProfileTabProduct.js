import React, { Component } from 'react';
import { Text } from 'native-base';

class ProfileTabProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this._fetchUserProducts = this._fetchUserProducts.bind(this);
  }

  _fetchUserProducts() {
    //
  }

  componentWillMount() {
    this._fetchUserProducts();
  }

  render() {
    return <Text>Tab Product</Text>;
  }
}

export default ProfileTabProduct;
