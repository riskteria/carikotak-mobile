import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Content, Body, Card, CardItem, Text } from 'native-base';
import StarRating from 'react-native-star-rating';

import styles from './styles';
import colors from 'styles/_colors';

const mapStateToProps = state => {
  return {
    activeUser: state.authSessionHandler.active_user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class StoryScreenInfoRating extends Component {
  constructor(props) {
    super(props);

    this._onSelectedStar = this._onSelectedStar.bind(this);
  }

  _onSelectedStar() {}

  render() {
    const { story } = this.props;

    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <Card style={StyleSheet.flatten(styles.infoStarRating)}>
          <CardItem>
            <Body>
              <Body>
                <Text>Berikan rating</Text>
              </Body>
            </Body>
          </CardItem>
          <CardItem>
            <StarRating
              disabled={false}
              selectedStar={this._onSelectedStar}
              maxStars={5}
              rating={story.rating}
              starSize={32}
              starStyle={{ marginLeft: 2, marginRight: 2 }}
              starColor={colors.colorTomato}
              halfStarEnabled={true}
              emptyStarColor={colors.colorGrey}
            />
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  StoryScreenInfoRating
);
