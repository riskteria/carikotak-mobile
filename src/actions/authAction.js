import { UPDATE_ACCESS_TOKEN } from 'constants/actionTypes';

export const updateAccessToken = token => {
  return {
    type: UPDATE_ACCESS_TOKEN,
    token
  };
};
