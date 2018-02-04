import React, {Component} from 'react'
import {connect} from 'react-redux';
import {toggleApprove, uploadFiles} from '../actions/files';
import MenuBar from '../components/MenuBar';

const mapStateToProps = ({files, approvedFiles, currentFiles, progress}) => {
  return {
    // files,
    // approvedFiles,
    // currentFiles,
    // progress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleApprove: (id) => {
    //   dispatch(toggleApprove(id));
    // },
    // uploadFiles: () => {
    //   dispatch(uploadFiles());
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
