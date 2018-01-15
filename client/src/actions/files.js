import axios from 'axios';
import cuid from 'cuid';
import {ADD_FILES} from './actionTypes';

export const addFiles = (files) => {
  let fileObj = {};
  
  files.forEach((file) => {
    file.id = cuid();
    fileObj[file.id] = file;
  });

  return {
    type: ADD_FILES,
    payload: {
      files: fileObj
    }
  }
};

