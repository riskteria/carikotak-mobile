import React, { Component } from 'react';
import { Share } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

import { API_URL } from 'react-native-dotenv';

class StoryScreenHeader extends Component {
  constructor(props) {
    super(props);

    this._onPressedShare = this._onPressedShare.bind(this);
  }

  _onPressedShare() {
    const { story } = this.props;
    const url = API_URL + '/story/' + story.slug;

    Share.share(
      {
        message:
          'Baca informasi ' +
          story.title +
          ' di Carikotak sekarang juga! ' +
          url,
        url: url,
        title: story.title
      },
      {
        // Android only:
        dialogTitle: 'Share ' + story.title,
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
      }
    );
  }

  render() {
    const { story } = this.props;
    const { goBack, navigate } = this.props.navigation;

    const RightButton = () =>
      <Right>
        <Button transparent dark onPress={() => this._onPressedShare()}>
          <Icon name="md-share" />
        </Button>
        <Button
          transparent
          danger
          onPress={() =>
            navigate('Report', {
              type: 'post',
              id: story.id,
              title: story.title
            })}
        >
          <Icon name="md-flag" />
        </Button>
      </Right>;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorBlack }}>
            {story.title}
          </Title>
        </Body>
        {story ? <RightButton /> : <Right />}
      </Header>
    );
  }
}

export default StoryScreenHeader;
