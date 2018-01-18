import {combineReducers} from 'redux';
import { ADD_FILES, TOGGLE_APPROVE } from '../actions/actionTypes';

function addFileEntry(state, action) {
  const {payload} = action;
  const {files} = payload;

  return {
    ...state,
    ...files
  }
}

function toggleApproveById(state, action) {
  const {payload} = action;
  const {id} = payload;

  const toggledFile = {...state[id], approved: !state[id].approved}

  return {...state,
          [id]: toggledFile}
}

function fileById(state = {}, action) {
  switch(action.type) {
    case ADD_FILES: return addFileEntry(state, action);
    case TOGGLE_APPROVE: return toggleApproveById(state, action);
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

function approveFiles(state = {}, action) {
  switch(action.type) {
    case TOGGLE_APPROVE: return toggleApproveById(state, action);
    default: return state;
  }
}

const fileReducer = combineReducers({
  byId: fileById,
  allIds: allFiles
});

export default fileReducer;