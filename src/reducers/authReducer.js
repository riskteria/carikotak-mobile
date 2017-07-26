import store from 'react-native-simple-store';
import { UPDATE_ACCESS_TOKEN } from 'constants/actionTypes';

const initialState = {
  access_token: ''
};

export const authSessionHandler = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        access_token: action.token
      });
    default:
      return state;
  }
};
