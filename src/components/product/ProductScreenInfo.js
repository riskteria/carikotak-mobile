import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Content, Text } from 'native-base';
import StarRating from 'react-native-star-rating';
import HTMLView from 'react-native-htmlview';

import styles from './styles';
import colors from 'styles/_colors';

class ProductScreenInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <View>
        <Content style={StyleSheet.flatten(styles.infoSection)}>
          <Content>
            <Text>
              {product.name}
            </Text>
          </Content>
          <Content>
            <Text>
              Rp.{product.price}
            </Text>
          </Content>
          <Content>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={product.rating || 0}
              starSize={10}
              starColor={colors.colorAccent}
              emptyStarColor={colors.colorAccent}
            />
          </Content>
        </Content>

        <Content style={StyleSheet.flatten(styles.infoSection)}>
          <Content>
            <HTMLView value={product.description} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              veniam, suscipit voluptatem rem rerum vel vero incidunt sapiente
              voluptatum. Quod tempore incidunt atque, ipsa itaque excepturi
              rerum modi officia nisi!Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Alias voluptates impedit quisquam delectus amet
              voluptatibus fuga obcaecati quaerat possimus rerum ratione neque
              accusantium illum, vel saepe, quos, molestiae. Rem, dolorum.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos
              deserunt pariatur beatae sint distinctio repellat cupiditate,
              accusamus sit. Maiores doloribus tenetur fuga sapiente hic!
              Dolorem labore harum, error maxime.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus minus amet, fugit nam
              delectus in et ipsa doloribus. Tenetur placeat necessitatibus modi
              laborum distinctio quas aspernatur itaque aliquid architecto
              nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              laudantium alias ipsa voluptate ipsum blanditiis sed? Beatae
              perferendis, autem eius mollitia illo, fugiat quia facilis
              maiores, id quisquam ab culpa.
            </Text>
          </Content>
        </Content>
      </View>
    );
  }
}

export default ProductScreenInfo;
