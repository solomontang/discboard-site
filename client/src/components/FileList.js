import React, {Component} from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import FileRow from './FileRow'

class FileList extends Component {
  
  render () {
    const {files, openDialog} = this.props;
    return (
      <div>
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
            {files.allIds.map( id => {
                return <FileRow file={files.byId[id]} key={id}/>
              })}
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Button floated='right' icon labelPosition='left' primary size='small' onClick={openDialog}>
                  <Icon name='plus' /> Add Files
                </Button>
                <Button size='small'>Approve Selected</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        
      </div>
    )
  }
}

export default FileList;