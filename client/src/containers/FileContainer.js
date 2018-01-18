import React, {Component} from 'react'
import {connect} from 'react-redux';
import {toggleApprove} from '../actions/files';
import FileList from '../components/FileList';

const mapStateToProps = ({files}) => {
  return {
    files
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApprove: (id) => {
      dispatch(toggleApprove(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
