import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ProductListCategory from './ProductListCategory';
import CardProduct from './CardProduct';

import styles from './styles';

class ProductList extends Component {
  constructor(props) {
    super(props);

    const { categoryId } = this.props;

    this.state = {
      category: categoryId
    };
  }

  render() {
    const { products, navigation, _onRefresh, refreshing } = this.props;

    const _keyExtractor = (item, index) => item.id;

    const _renderItem = ({ item }) =>
      <CardProduct product={item} navigation={navigation} />;

    return (
      <FlatList
        ListHeaderComponent={<ProductListCategory navigation={navigation} />}
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
