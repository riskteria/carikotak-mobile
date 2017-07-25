import { START_LOADING_SPIN, STOP_LOADING_SPIN } from 'constants/actionTypes';

export function startLoadingSpin() {
  return {
    type: START_LOADING_SPIN
  };
}

export function stopLoadingSpin() {
  return {
    type: STOP_LOADING_SPIN
  };
}
