import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import guilds from './guilds';
import tasks from './tasks';
import files from './files';
import approvedFiles from './approvedFiles';
import currentFiles from './currentFiles';
import progress from './progress';


const rootReducer = combineReducers({
  user,
  guilds,
  tasks,
  files,
  approvedFiles,
  currentFiles,
  progress,
  router: routerReducer
});

export default rootReducer;
