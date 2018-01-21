import {SET_PROGRESS, ADD_FILES} from '../actions/actionTypes';

function progress(state = {}, action) {
  switch(action.type) {
    case ADD_FILES: return addFilesProgress(state, action);
    case SET_PROGRESS: return setFileProgress(state, action);
    default: return state;
  }
}

function addFilesProgress(state, action) {
  const {payload} = action;
  const {files} = payload;
  const newProgress = {};

  Object.keys(files).forEach(id => {
    newProgress[id] = 0;
  })

  return {
    ...state,
    ...newProgress
  }
}

function setFileProgress(state, action) {
  const {payload} = action;
  const {id, percent} = payload;

  return {
    ...state,
    [id]: percent
  }
}

export default progress;