import store from 'react-native-simple-store';
import { UPDATE_ACCESS_TOKEN, UPDATE_ACTIVE_USER } from 'constants/actionTypes';

const initialState = {
  access_token: '',
  active_user: null
};

export const authSessionHandler = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        access_token: action.token
      });
    case UPDATE_ACTIVE_USER:
      return Object.assign({}, state, {
        active_user: action.user
      });
    default:
      return state;
  }
};
