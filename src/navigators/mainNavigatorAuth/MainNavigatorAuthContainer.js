import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';

import { updateActiveUser } from 'actions/authAction';
import { receiveNotifications } from 'actions/notificationAction';
import { MainNavigatorAuth } from './MainNavigatorAuth';

import { API } from 'services/APIService';

const mapStateToProps = state => {
  return {
    navigationState: state.mainNavigatorAuth,
    dispatch: state.dispatch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {
      dispatch(updateActiveUser(user));
    }
  };
};

class MainNavigatorAuthContainer extends Component {
  constructor(props) {
    super(props);

    this._FetchUserData = this._FetchUserData.bind(this);
  }

  _FetchUserData() {
    const { updateUser, dispatch } = this.props;

    API()
      .get('api/me')
      .then(res => {
        updateUser(res.data);
        receiveNotifications(dispatch, res.data);
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this._FetchUserData();
  }

  render() {
    return <MainNavigatorAuth />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  MainNavigatorAuthContainer
);
