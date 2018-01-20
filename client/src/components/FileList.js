import React, {PureComponent} from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import FileRow from './FileRow'

class FileList extends PureComponent {
  
  render () {
    const {files, currentFiles, approvedFiles, openDialog, toggleApprove, uploadFiles} = this.props;
    return (
      <Table compact celled definition striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Preview</Table.HeaderCell>
            <Table.HeaderCell>Progress</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {currentFiles.map( id => {
              return <FileRow file={files[id]} approved= {approvedFiles[id]} toggleApprove={toggleApprove} key={id}/>
            })}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              <Button floated='right' icon labelPosition='left' primary size='small' onClick={openDialog}>
                <Icon name='plus' /> Add Files
              </Button>
              <Button size='small' onClick={() => uploadFiles()}>Upload Approved</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default FileList;