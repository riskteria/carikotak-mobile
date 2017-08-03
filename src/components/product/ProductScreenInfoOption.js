import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Button, Icon, Text, Grid, Col } from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';

class ProductScreenInfoOption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, product } = this.props;
    const { navigate } = navigation;

    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <Grid>
          <Col style={{ paddingRight: 8 }}>
            <Button
              bordered
              block
              dark
              style={{ borderColor: colors.colorAccent }}
              onPress={() =>
                navigate('Comment', { id: product.id, type: 'product' })}
            >
              <Icon
                name="md-chatbubbles"
                style={StyleSheet.flatten(styles.optionText)}
              />
              <Text style={StyleSheet.flatten(styles.optionText)}>
                {product.total_comments + ' Komentar'}
              </Text>
            </Button>
          </Col>
          <Col style={{ paddingLeft: 8 }}>
            <Button
              bordered
              block
              dark
              onPress={() =>
                navigate('Connection', { type: 'product', slug: product.slug })}
              style={{ borderColor: colors.colorAccent }}
            >
              <Icon
                name="md-paper-plane"
                style={StyleSheet.flatten(styles.optionText)}
              />
              <Text style={StyleSheet.flatten(styles.optionText)}>
                Sarankan
              </Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    );
  }
}

export default ProductScreenInfoOption;
