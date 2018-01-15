
import React from 'react';
import {Table, Checkbox, Progress} from 'semantic-ui-react';

const FileRow = (props) => (
  <Table.Row>
    <Table.Cell collapsing>
      <Checkbox toggle />
    </Table.Cell>
    <Table.Cell>{props.file.name}</Table.Cell>
    <Table.Cell collapsing>
      <audio controls name="media">
        <source src={props.file.preview} type="audio/wav" />
      </audio>
    </Table.Cell>
    <Table.Cell>
      <Progress percent={0}/>
    </Table.Cell>
  </Table.Row>
)

export default FileRow;