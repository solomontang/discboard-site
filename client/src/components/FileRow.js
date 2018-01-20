
import React from 'react';
import {Table, Checkbox, Progress} from 'semantic-ui-react';

const FileRow = (props) => (
  <Table.Row>
    {console.log('render')}
    <Table.Cell collapsing>
      <Checkbox toggle name={props.file.id} checked={props.file.approved} onClick={() => props.toggleApprove(props.file.id)}/>
    </Table.Cell>
    <Table.Cell>{props.file.value.name}</Table.Cell>
    <Table.Cell collapsing>
      <audio controls name="media">
        <source src={props.file.value.preview} type="audio/wav" />
      </audio>
    </Table.Cell>
    <Table.Cell>
      <Progress disabled value={0} total= {100} progress='percent'/>
    </Table.Cell>
  </Table.Row>
)

export default FileRow;