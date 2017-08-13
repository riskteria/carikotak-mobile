import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Share, ToastAndroid } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

import { API_URL } from 'react-native-dotenv';
import { API } from 'services/APIService';
import StoryScreenOptionModal from './StoryScreenOptionModal';

const mapStateToProps = state => {
  return {
    activeUser: state.authSessionHandler.active_user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class StoryScreenHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOptionVisible: false
    };

    this._onOptionDeletePressed = this._onOptionDeletePressed.bind(this);
    this._onModalOptionToggled = this._onModalOptionToggled.bind(this);
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

  _onOptionDeletePressed() {
    const { story, navigation } = this.props;
    const { goBack } = navigation;

    API()
      .delete('api/post/' + story.id)
      .then(() => {
        this._onModalOptionToggled();
        goBack();
      })
      .catch(err => {
        ToastAndroid.show(
          `Error ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  _onModalOptionToggled() {
    this.setState({ modalOptionVisible: !this.state.modalOptionVisible });
  }

  render() {
    const { modalOptionVisible } = this.state;
    const { story, navigation } = this.props;
    const { goBack, navigate } = navigation;

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
        {story.user.id === this.props.activeUser.id
          ? <Button
              transparent
              dark
              onPress={() => this._onModalOptionToggled()}
            >
              <Icon name="md-more" />
            </Button>
          : null}
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

        <StoryScreenOptionModal
          navigation={navigation}
          modalOptionVisible={modalOptionVisible}
          story={story}
          _onModalOptionToggled={this._onModalOptionToggled}
          _onOptionDeletePressed={this._onOptionDeletePressed}
        />
      </Header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryScreenHeader);
