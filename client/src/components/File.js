import React from 'react';
import {Card, Icon, Button} from 'semantic-ui-react';

//TODO: make styling method consistent

const cardStyle = {
  // 'minHeight': '160px'
}

const pStyle = {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '1px',
  color: 'grey'
}

const File = (props) => (
  <Card fluid style={cardStyle}>
    <Card.Content >
      <Card.Header style={pStyle}>
        {props.file.name}
      </Card.Header>
      <audio controls name="media">
        <source src={props.file.preview} type="audio/wav" />
      </audio>
    </Card.Content>
    <Card.Content extra>
        <Button color='green'>Save</Button>
        <Button basic color='red'>Delete</Button>
    </Card.Content>
  </Card>
);

export default File;