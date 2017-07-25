import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import CardStory from './CardStory';
import styles from './styles';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

class TabStory extends Component {
  constructor(props) {
    super(props);

    this._onFetchFavorites = this._onFetchFavorites.bind(this);

    this.state = {
      favorites: [],
      loadingSpinner: false
    };
  }

  _onFetchFavorites() {
    this.setState({ loadingSpinner: true });

    setTimeout(() => {
      this.setState({ loadingSpinner: false });
    }, 1000);
  }

  componentWillMount() {
    this._onFetchFavorites();
  }

  render() {
    const { navigate } = this.props;
    const { loadingSpinner } = this.props;

    const storyNumber = [1, 2, 3, 4, 5];

    const storyCard = storyNumber.map((number, index) =>
      <TouchableOpacity
        activeOpacity={0.9}
        key={index}
        onPress={() => navigate('Story')}
      >
        <CardStory key={index} />
      </TouchableOpacity>
    );

    return (
      <ScrollView style={styles.tabSection}>
        {loadingSpinner ? <ProgressBar /> : storyCard}
      </ScrollView>
    );
  }
}

export default TabStory;
