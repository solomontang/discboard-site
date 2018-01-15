import React from 'react';
import {Card, Icon} from 'semantic-ui-react';

//TODO: make styling method consistent

const cardStyle = {
  'minHeight': '160px'
}

const pStyle = {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '1px',
  color: 'grey'
}

const Task = (props) => (
  <Card fluid style={cardStyle}>
    <Card.Content >
      <p style={pStyle}>
        {props.task.title}
        <span style={{float: 'right'}}>
          <Icon name='trash outline' link/>
        </span>
      </p>
    </Card.Content>
  </Card>
);

export default Task;