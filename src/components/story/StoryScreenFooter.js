import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, Button, Icon, Text } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import styles from './styles';
import colors from 'styles/_colors';

class StoryScrennFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { story } = this.props;
    const { _onFavoritePressed } = this.props;

    return (
      <Footer>
        <Grid>
          <Col style={{ flex: 1, backgroundColor: colors.colorTomato }}>
            <Button
              onPress={() => _onFavoritePressed()}
              small
              transparent
              block
              light
              style={StyleSheet.flatten(styles.footerColButton)}
            >
              <Icon
                name="md-heart"
                style={StyleSheet.flatten(styles.footerColButtonIcon)}
              />
              <Text style={StyleSheet.flatten(styles.footerColButtonText)}>
                {story.favorited ? 'Hapus Favorit' : 'Tambah Favorit'}
              </Text>
            </Button>
          </Col>
        </Grid>
      </Footer>
    );
  }
}

export default StoryScrennFooter;
