import axios from 'axios';
import cuid from 'cuid';
import {ADD_FILES, TOGGLE_APPROVE, SET_PROGRESS} from './actionTypes';
import {setProgress} from './progress';

export const addFiles = (files) => {
  let fileObj = {};
  
  files.forEach((value) => {
    const id = cuid();
    fileObj[id] = {value, id};
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

const fetchSignedUrl = (file, guild) => {
  return axios.get('api/upload', {
    params: {
      filename: file.name,
      filetype: file.type
    }
  });
}

export const uploadFiles = () => {
  return (dispatch, getState) => {
    const {files, currentFiles, approvedFiles} = getState();
    currentFiles.forEach(id => {
      if (approvedFiles[id]) {
        const file = files[id].value;
        fetchSignedUrl(file)
        .then(result => {
          let signedUrl = result.data.signedUrl;
          let options = {
            headers: {
              'Content-Type': file.type,
            },
            onUploadProgress: function (e) {
              dispatch(setProgress(id, Math.floor((e.loaded / e.total ) * 100)))
            }
          };
    
          return axios.put(signedUrl, file, options);
        })
      }
    })
  }
}