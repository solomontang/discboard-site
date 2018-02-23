import React, {PureComponent} from 'react';
import {Table, Button, Icon, Container} from 'semantic-ui-react';
import '../css/FileList.css'
import FileRow from './FileRow'

class FileList extends PureComponent {
  
  render () {
    const {files, currentFiles, approvedFiles, progress, openDialog, toggleApprove, uploadFiles} = this.props;
    return (
      <div className='clip-table'>
       <Table compact celled striped structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>
                <Icon name='checkmark'/>
              </Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Preview</Table.HeaderCell>
              <Table.HeaderCell>Progress</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {currentFiles.length ? currentFiles.map( id => {
                return <FileRow file={files[id]} approved= {approvedFiles[id]} toggleApprove={toggleApprove} progress={progress[id]} key={id}/>
              }) :
              <Table.Row>
                <Table.Cell colSpan='4' textAlign='center'>
                  Fill this space with your favorite sound clips to add to the current Discord Guild. Just click 'Add Files' or drag and drop!
                </Table.Cell>
              </Table.Row>
              
            }
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
      </div>
    )
  }
}

export default FileList;