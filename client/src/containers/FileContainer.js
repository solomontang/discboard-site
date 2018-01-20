import React, {Component} from 'react'
import {connect} from 'react-redux';
import {toggleApprove, uploadFiles} from '../actions/files';
import FileList from '../components/FileList';

const mapStateToProps = ({files, approvedFiles, currentFiles}) => {
  return {
    files,
    approvedFiles,
    currentFiles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApprove: (id) => {
      dispatch(toggleApprove(id));
    },
    uploadFiles: () => {
      dispatch(uploadFiles());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
