import {SET_PROGRESS} from './actionTypes';

export const setProgress = (id, percent)  => {
  return {
    type: SET_PROGRESS,
    payload: {
      id,
      percent
    }
  }
}

