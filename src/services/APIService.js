import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

import store from '../store';

export const API = () => {
  const token = store.getState().authSessionHandler.access_token;

  return axios.create({
    baseURL: API_URL,
    timeout: 120000,
    headers: {
      Accept: 'application/json',
      Content: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: 'Bearer ' + token
    }
  });
};
