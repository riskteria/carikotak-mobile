import React, { Component } from 'react';
import { Modal, ToastAndroid } from 'react-native';
import {
  Container,
  Header,
  Icon,
  Left,
  Button,
  Body,
  Title
} from 'native-base';

import FollowList from './FollowList';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import colors from 'styles/_colors';
import { API } from 'services/APIService';

class FollowModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loadingSpin: true,
      refreshing: false
    };

    this._onModalFollowOpened = this._onModalFollowOpened.bind(this);
    this._onModalRequestClose = this._onModalRequestClose.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  _onRefresh() {
    const { modalFollowType, user } = this.props;

    this.setState({ refreshing: true });
    API()
      .get(`api/user/${user.username}/${modalFollowType}`)
      .then(res => {
        this.setState({ refreshing: false });

        if (modalFollowType === 'follower') {
          this.setState({ users: res.data.follower });
        } else {
          this.setState({ users: res.data.following });
        }
      })
      .catch(err => {
        this.setState({ refreshing: false });
        ToastAndroid.show(
          `Error : ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  _onModalFollowOpened() {
    const { modalFollowType, user } = this.props;

    this.setState({ loadingSpin: true });
    API()
      .get(`api/user/${user.username}/${modalFollowType}`)
      .then(res => {
        this.setState({ loadingSpin: false });

        if (modalFollowType === 'follower') {
          this.setState({ users: res.data.follower });
        } else {
          this.setState({ users: res.data.following });
        }
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(`Error : ${JSON.stringify(err)}`, ToastAndroid.SHORT);
      });
  }

  _onModalRequestClose() {
    const { modalFollowType, _onModalFollowToggled } = this.props;
    this.setState({ users: [], loadingSpin: true });
    _onModalFollowToggled(modalFollowType);
  }

  render() {
    const {
      modalFollowVisible,
      modalFollowType,
      navigation,
      _onUserCardClicked
    } = this.props;

    const { users, loadingSpin, refreshing } = this.state;

    return (
      <Modal
        onShow={() => this._onModalFollowOpened()}
        animationType={'none'}
        transparent={false}
        visible={modalFollowVisible}
        onRequestClose={() => this._onModalRequestClose()}
      >
        <Container>
          <Header
            style={{ backgroundColor: colors.colorLight, elevation: 1 }}
            searchBar
            rounded
          >
            <Left style={{ flex: 0.16 }}>
              <Button
                transparent
                dark
                onPress={() => this._onModalRequestClose()}
              >
                <Icon name="md-arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={{ color: colors.colorBlack }}>
                {modalFollowType === 'following' ? 'Mengikuti' : 'Pengikut'}
              </Title>
            </Body>
          </Header>

          {loadingSpin
            ? <ProgressBar />
            : <FollowList
                navigation={navigation}
                users={users}
                refreshing={refreshing}
                modalFollowType={modalFollowType}
                _onUserCardClicked={_onUserCardClicked}
                _onRefresh={this._onRefresh}
              />}
        </Container>
      </Modal>
    );
  }
}

export default FollowModal;
