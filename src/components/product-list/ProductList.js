import React, { Component } from 'react';
import { FlatList, View, Picker } from 'react-native';

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
    const {
      products,
      navigation,
      _onRefresh,
      refreshing,
      categories
    } = this.props;

    const { navigate } = navigation;

    const _keyExtractor = (item, index) => item.id;

    const _renderItem = ({ item }) =>
      <CardProduct product={item} navigation={navigation} />;

    const _itemPicker = () =>
      categories.map((category, index) =>
        <Picker.Item label={category.name} value={category.id} key={index} />
      );

    const _renderItemHeader = () =>
      <View>
        <Picker
          selectedValue={this.state.category}
          onValueChange={(value, index) =>
            navigate('ProductList', { categoryId: value })}
        >
          {_itemPicker()}
        </Picker>
      </View>;

    return (
      <FlatList
        ListHeaderComponent={_renderItemHeader()}
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
