import {connect} from 'react-redux';
import {fetchTasks} from '../actions/tasks';
import TaskList from '../components/TaskList';

const mapStateToProps = ({tasks}) => {
  return {
    tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
