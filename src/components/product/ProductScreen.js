import React, { Component } from 'react';
import { Container } from 'native-base';

import ProgressBarContainer from 'components/_shared/progress-bar/ProgressBarContainer';
import { API } from 'services/APIService';

class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetProduct = this._onGetProduct.bind(this);
  }

  _onGetProduct() {
    this.props.startSpin();

    setTimeout(() => {
      this.props.stopSpin();
    }, 1000);
  }

  componentWillMount() {
    this._onGetProduct();
  }

  render() {
    return (
      <Container>
        <ProgressBarContainer />
      </Container>
    );
  }
}

export default ProductScreen;
