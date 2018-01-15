import {combineReducers} from 'redux';
import { ADD_FILES } from '../actions/actionTypes';

function addFileEntry(state, action) {
  const {payload} = action;
  const {files} = payload;

  return {
    ...state,
    ...files
  }
}

function fileById(state = {}, action) {
  switch(action.type) {
    case ADD_FILES: return addFileEntry(state, action);
    default: return state;
  }
}

function addFileId(state, action) {
  const {payload} = action;
  const {files} = payload;
  return state.concat(Object.keys(files));
}

function allFiles(state = [], action) {
  switch(action.type) {
    case ADD_FILES: return addFileId(state, action);
    default: return state;
  }
}

const fileReducer = combineReducers({
  byId: fileById,
  allIds: allFiles
});

export default fileReducer;