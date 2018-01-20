import { ADD_FILES } from '../actions/actionTypes';

function currentFiles(state = [], action) {
  switch(action.type) {
    case ADD_FILES: return addFileId(state, action);
    default: return state;
  }
}

function addFileId(state, action) {
  const {payload} = action;
  const {files} = payload;
  return state.concat(Object.keys(files));
}


export default currentFiles;