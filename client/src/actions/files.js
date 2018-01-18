import axios from 'axios';
import cuid from 'cuid';
import {ADD_FILES, TOGGLE_APPROVE} from './actionTypes';

export const addFiles = (files) => {
  let fileObj = {};
  
  files.forEach((value) => {
    const id = cuid();
    fileObj[id] = {value, id, approved: false};
  });

  return {
    type: ADD_FILES,
    payload: {
      files: fileObj
    }
  }
};

export const toggleApprove = (id) => {
  return {
    type: TOGGLE_APPROVE,
    payload: {
      id
    }
  }
}

