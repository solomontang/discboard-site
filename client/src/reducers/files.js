import { ADD_FILES } from '../actions/actionTypes';

function files(state = {}, action) {
  switch(action.type) {
    case ADD_FILES: return addFiles(state, action);
    default: return state;
  }
}

function addFiles(state, action) {
  const {payload} = action;
  const {files} = payload;
  
  return {
    ...state,
    ...files
  }
}

export default files;