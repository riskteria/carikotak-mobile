import React, { Component } from 'react';
import { Container } from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetProduct = this._onGetProduct.bind(this);

    this.state = {
      loadingSpin: false
    };
  }

  _onGetProduct() {
    this.setState({ loadingSpin: true });

    setTimeout(() => {
      this.setState({ loadingSpin: false });
    }, 1000);
  }

  componentWillMount() {
    this._onGetProduct();
  }

  render() {
    const { loadingSpin } = this.state;

    return (
      <Container>
        {loadingSpin ? <ProgressBar /> : null}
      </Container>
    );
  }
}

export default ProductScreen;
