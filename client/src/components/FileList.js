import React, {Component} from 'react';
import {Transition} from 'semantic-ui-react';
import File from './File'

class FileList extends Component {
  
  render () {
    const {files} = this.props;
    return (
      <div>
        {
          files.allIds.map( id => {
            return <File file={files.byId[id]} key={id}/>
          })
        }
      </div>
    )
  }
}

export default FileList;