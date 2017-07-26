import { connect } from 'react-redux';
import { updateAccessToken } from 'actions/authAction';

import LoginScreen from './LoginScreen';

const mapStateToProps = state => {
  return {
    access_token: state.authSessionHandler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAccessToken: token => {
      dispatch(updateAccessToken(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
