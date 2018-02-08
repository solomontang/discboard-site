import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import FileContainer from './FileContainer';
import {addFiles} from '../actions/files';
import axios from 'axios';

class UploadContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const {files} = this.props;
    console.log(this.props);
    let dropzoneRef;
    return (
    <div>
      <h1>Clips</h1>
      <Dropzone onDrop={this.props.onDrop} 
        accept="audio/*"
        maxSize={1024*1024}
        style={{position:"relative"}}
        disableClick
        ref={(node) => { dropzoneRef = node; }}
      >
        <FileContainer openDialog={() => dropzoneRef.open()}/>
      </Dropzone>
    </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onDrop: files => {
      dispatch(addFiles(files))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
