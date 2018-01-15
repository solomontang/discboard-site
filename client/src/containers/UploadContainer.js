import React, {Component} from 'react'
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
// import UploadZone from '../components/UploadZone';
// import FileContainer from '../containers/FileContainer';
import FileList from '../components/FileList';
import {addFiles} from '../actions/files';

class UploadContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {files} = this.props;
    return (
    <div>
      <Dropzone onDrop={this.props.onDrop} 
        accept="audio/*"
        maxSize={1024*1024}
      />
      <FileList files={files}/>
    </div>
    )
  }
}

const mapStateToProps = ({files}) => {
  return {
    files
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDrop: files => {
      dispatch(addFiles(files))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
