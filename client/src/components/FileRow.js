import React, {PureComponent} from 'react';
import {Table, Checkbox, Progress} from 'semantic-ui-react';

class FileRow extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {toggleApprove, file} = this.props;
    toggleApprove(file.id);
  }

  render() {
    const {file, toggleApprove, progress, approved} = this.props;
    return (
      <Table.Row>
        {console.log('render')}
        <Table.Cell collapsing>
          <Checkbox toggle checked={approved} onClick={this.handleClick}/>
        </Table.Cell>
        <Table.Cell>{file.value.name}</Table.Cell>
        <Table.Cell collapsing>
          <audio controls name="media">
            <source src={file.value.preview} />
          </audio>
        </Table.Cell>
        <Table.Cell>
          <Progress percent={progress} progress='percent'/>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default FileRow;