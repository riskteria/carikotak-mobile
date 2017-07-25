import { START_LOADING_SPIN, STOP_LOADING_SPIN } from 'constants/actionTypes';

export const LoadingSpinReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case START_LOADING_SPIN:
      return Object.assign({}, state, {
        show: true
      });

    case STOP_LOADING_SPIN:
      return Object.assign({}, state, {
        show: false
      });

    default:
      return state;
  }
};
