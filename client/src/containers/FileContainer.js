import React, {Component} from 'react'
import {connect} from 'react-redux';
import FileList from '../components/FileList';

const mapStateToProps = ({files}) => {
  return {
    files
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrop: files => {
      dispatch(addFiles(files))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
