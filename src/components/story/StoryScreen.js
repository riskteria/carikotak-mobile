import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, ToastAndroid, RefreshControl } from 'react-native';
import { Container, Content } from 'native-base';

import StoryScreenHeader from './StoryScreenHeader';
import StoryScreeninfo from './StoryScreenInfo';
import StoryScreenSwiper from './StoryScreenSwiper';
import StoryScreenFooter from './StoryScreenFooter';

import styles from './styles';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import { API } from 'services/APIService';

const mapStateToProps = state => {
  return {
    activeUser: state.authSessionHandler.active_user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class StoryScreen extends Component {
  constructor(props) {
    super(props);

    this._onRefresh = this._onRefresh.bind(this);
    this._onGetStory = this._onGetStory.bind(this);
    this._onFavoritePressed = this._onFavoritePressed.bind(this);
    this._onUnFavoritePressed = this._onUnFavoritePressed.bind(this);
    this._onRatingGiven = this._onRatingGiven.bind(this);

    this.state = {
      story: false,
      loadingSpin: false,
      refreshing: false
    };
  }

  _onFavoritePressed() {
    const { story } = this.state;

    API()
      .put('api/favorite/' + story.id + '?type=post')
      .then(() => {
        this.setState({
          story: Object.assign({}, story, {
            favorited: true
          })
        });
        ToastAndroid.show('Produk ditambahkan ke favorit', ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onUnFavoritePressed() {
    const { story } = this.state;

    API()
      .delete('api/favorite/' + story.id + '?type=post')
      .then(() => {
        this.setState({
          story: Object.assign({}, story, {
            favorited: false
          })
        });
        ToastAndroid.show('Produk dihapus dari favorit', ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onGetStory() {
    this.setState({ loadingSpin: true });

    API()
      .get(`api/post/${this.props.navigation.state.params.slug}`)
      .then(res => {
        this.setState({ loadingSpin: false, story: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  _onRatingGiven(rating) {
    this.setState({
      story: Object.assign({}, this.state.story, {
        rating: rating.rating,
        user_rating: rating.user_rating
      })
    });
  }

  _onRefresh() {
    this.setState({ refreshing: true });

    API()
      .get(`api/post/${this.props.navigation.state.params.slug}`)
      .then(res => {
        this.setState({ refreshing: false, story: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onGetStory();
  }

  render() {
    const { loadingSpin, story, refreshing } = this.state;
    const { navigation, activeUser } = this.props;

    const StoryDetail = () =>
      <View style={styles.mainContainer}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => this._onRefresh()}
            />
          }
        >
          <Content>
            <StoryScreenSwiper story={story} />

            <StoryScreeninfo
              story={story}
              navigation={navigation}
              activeUser={activeUser}
              _onRatingGiven={this._onRatingGiven}
            />
          </Content>
        </ScrollView>

        <StoryScreenFooter
          story={story}
          sessionHandler
          navigation={navigation}
          _onFavoritePressed={this._onFavoritePressed}
          _onUnFavoritePressed={this._onUnFavoritePressed}
        />
      </View>;

    return (
      <Container>
        <StoryScreenHeader story={story} navigation={navigation} />
        {loadingSpin ? <ProgressBar /> : <StoryDetail />}
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryScreen);
