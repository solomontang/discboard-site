import { combineReducers } from 'redux';
import user from './user';
import tasks from './tasks';
import files from './files';
import approvedFiles from './approvedFiles';
import currentFiles from './currentFiles';
import progress from './progress';


const rootReducer = combineReducers({
  user,
  tasks,
  files,
  approvedFiles,
  currentFiles,
  progress
});

export default rootReducer;
