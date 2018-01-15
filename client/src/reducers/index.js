import { combineReducers } from 'redux';
import user from './user';
import tasks from './tasks';
import files from './files';

const rootReducer = combineReducers({
  user,
  tasks,
  files
});

export default rootReducer;
