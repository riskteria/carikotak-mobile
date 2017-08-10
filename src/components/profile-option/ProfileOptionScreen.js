import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import ProfileOptionsHeader from './ProfileOptionsHeader';
import ProfileOptionList from './ProfileOptionList';

import { updateAccessToken } from 'actions/authAction';

import styles from './styles';

const mapStateToProps = state => {
  return {
    sessionHandler: state.authSessionHandler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateToken: token => {
      dispatch(updateAccessToken(token));
    }
  };
};

class ProfileOptionScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, updateToken } = this.props;

    console.log(this.props);

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <ProfileOptionsHeader navigation={navigation} />

        <ScrollView>
          <ProfileOptionList
            navigation={navigation}
            updateToken={updateToken}
          />
        </ScrollView>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileOptionScreen
);
