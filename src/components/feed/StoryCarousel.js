import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import CardStory from './CardStory';
import { startLoadingSpin, stopLoadingSpin } from 'actions/spinnerAction';
import ProgressBarContainer from 'components/_shared/progress-bar/ProgressBarContainer';

import { API } from 'services/APIService';
import styles, { sliderWidth, itemWidth } from './styles';

const mapStateToProps = state => {
  return {
    loadingSpin: state.loadingSpin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startSpin: () => {
      dispatch(startLoadingSpin());
    },
    stopSpin: () => {
      dispatch(stopLoadingSpin());
    }
  };
};

class StoryCarousel extends Component {
  constructor(props) {
    super(props);

    this._getStories = this._getStories.bind(this);

    this.state = {
      stories: []
    };
  }

  _getStories() {
    const { startSpin, stopSpin } = this.props;

    startSpin();

    API.get('api/post?page=1&&per_page=5')
      .then(res => {
        stopSpin();
        this.setState({ stories: res.data });
      })
      .catch(() => {
        stopSpin();
      });
  }

  componentWillMount() {
    this._getStories();
  }

  render() {
    const { navigate, loadingSpin } = this.props;

    const CardSwipe = this.state.stories.map((story, index) =>
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        style={styles.slideInnerContainer}
        onPress={() => navigate('Story', { slug: story.slug })}
      >
        <CardStory key={index} story={story} />
      </TouchableOpacity>
    );

    const CarouselStory = () =>
      <Carousel
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={1}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.6}
        enableMomentum={false}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}
      >
        {CardSwipe}
      </Carousel>;

    return (
      <View>
        <View style={styles.tabProductSectionTop}>
          <Text style={styles.tabProductSectionLabel}>Cerita Terpopuler</Text>
          <Text
            onPress={() => navigate('StoryList')}
            style={styles.tabProductSectionLink}
          >
            Lihat Semua
          </Text>
        </View>
        {loadingSpin.show ? <ProgressBarContainer /> : <CarouselStory />}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryCarousel);
