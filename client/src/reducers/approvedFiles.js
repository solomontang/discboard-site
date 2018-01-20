import { ADD_FILES, TOGGLE_APPROVE } from '../actions/actionTypes';

function approvedFiles(state = {}, action) {
  switch(action.type) {
    case ADD_FILES: return addFilesToToggle(state, action);
    case TOGGLE_APPROVE: return toggleApproveById(state, action);
    default: return state;
  }
}

function addFilesToToggle(state, action) {
  const {payload} = action;
  const {files} = payload;
  const newFiles = {};
  Object.keys(files).forEach(id => {
    newFiles[id] = false;
  })
  return {...state, ...newFiles};
}

function toggleApproveById(state, action) {
  const {payload} = action;
  const {id} = payload;

  return {
    ...state,
    [id]: !state[id]
  }
}

export default approvedFiles;