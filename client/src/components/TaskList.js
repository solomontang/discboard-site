import React, {Component} from 'react';
import {Loader} from 'semantic-ui-react';
import Task from './Task'

class TaskList extends Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  render () {
    const {tasks} = this.props;
    return (
      <div>
        {
          tasks.allIds.length ? (
            tasks.allIds.map( id => {
              const task = tasks.byId[id];
              return <Task task={task} key={id}/>
            })
          ) : <Loader active/>
        }
      </div>
    )
  }
}

export default TaskList;