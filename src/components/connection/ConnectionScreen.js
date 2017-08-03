import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import ConnectionScreenHeader from './ConnectionScreenHeader';
import ConnectionList from './ConnectionList';

import { API } from 'services/APIService';

class ConnectionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingSpin: false,
      refreshing: false,
      connections: []
    };

    this._fetchAllConnections = this._fetchAllConnections.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  _onRefresh() {
    this.setState({ refreshing: true });

    API()
      .get('api/me/connection')
      .then(res => {
        this.setState({ refreshing: false, connections: res.data });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  _fetchAllConnections() {
    this.setState({ loadingSpin: true });

    API()
      .get('api/me/connection')
      .then(res => {
        this.setState({ loadingSpin: false, connections: res.data });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this._fetchAllConnections();
  }

  render() {
    const { loadingSpin, refreshing, connections } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <ConnectionScreenHeader navigation={navigation} />

        {loadingSpin
          ? <ProgressBar />
          : <ConnectionList
              navigation={navigation}
              connections={connections}
              refreshing={refreshing}
              _onRefresh={this._onRefresh}
            />}
      </Container>
    );
  }
}

export default ConnectionScreen;
