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

export const uploadFiles = () => {
  return (dispatch, getState) => {
    const {files} = getState();
    const {byId, allIds} = files;
    let file = byId[allIds[0]].value;
    axios.get('/api/upload', {
      params: {
        filename: file.name,
        filetype: file.type
      }
    })
    .then(result => {
      let signedUrl = result.data.signedUrl;
      let options = {
        headers: {
          'Content-Type': file.type,
        },
        onUploadProgress: function (e) {
          console.log(e);
        }
      };

      return axios.put(signedUrl, file, options);
    })
  }
}