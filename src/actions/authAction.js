import { UPDATE_ACCESS_TOKEN, UPDATE_ACTIVE_USER } from 'constants/actionTypes';

export const updateAccessToken = token => {
  return {
    type: UPDATE_ACCESS_TOKEN,
    token
  };
};

export const updateActiveUser = user => {
  return {
    type: UPDATE_ACTIVE_USER,
    user
  };
};
