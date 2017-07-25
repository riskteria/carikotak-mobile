import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text } from 'native-base';

import { API } from 'services/APIService';

import { startLoadingSpin, stopLoadingSpin } from 'actions/spinnerAction';
import ProgressBarContainer from 'components/_shared/progress-bar/ProgressBarContainer';

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

class StoryListScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetStories = this._onGetStories.bind(this);

    this.state = {
      stories: []
    };
  }

  _onGetStories() {
    const { startSpin, stopSpin } = this.props;

    startSpin();

    API.get('api/post')
      .then(res => {
        stopSpin();
        this.setState({ stories: res.data });
      })
      .catch(err => {
        stopSpin();
        throw err;
      });
  }

  componentWillMount() {
    this._onGetStories();
  }

  render() {
    const { loadingSpin } = this.props;

    const StoryList = () =>
      <Text>
        This is Story List, total: {this.state.stories.length}
      </Text>;

    return (
      <Container>
        {loadingSpin.show ? <ProgressBarContainer /> : <StoryList />}
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryListScreen);
