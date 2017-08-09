import React, { Component } from 'react';
import { FlatList } from 'react-native';

import CardProduct from './CardProduct';

import styles from './styles';
import EmptyListProduct from 'components/_shared/empty-list/EmptyListProduct';

class ProductList extends Component {
  constructor(props) {
    super(props);

    const { category } = this.props;

    this.state = {
      category: category
    };
  }

  render() {
    const { products, navigation, _onRefresh, refreshing } = this.props;

    const _keyExtractor = (item, index) => item.id;

    const _renderItem = ({ item }) =>
      <CardProduct product={item} navigation={navigation} />;

    return (
      <FlatList
        ListEmptyComponent={EmptyListProduct}
        contentContainerStyle={styles.productListHorizontal}
        refreshing={refreshing}
        onRefresh={() => _onRefresh()}
        data={products}
        numColumns={2}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />
    );
  }
}

export default ProductList;
