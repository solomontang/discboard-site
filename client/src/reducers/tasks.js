import {combineReducers} from 'redux';
import { ADD_TASK, DESTROY_TASK, FETCH_TASKS, FETCH_SUCCESS, FETCH_ERROR, SAVE_ELIGIBLE, SAVE_ERROR, SAVE_SUCCESS, SAVE_TASKS } from '../actions/actionTypes';


function addTaskEntry(state, action)  {
  const {payload} = action;
  const {title, taskId} = payload;

  const task = {id: taskId, title};

  return {
    ...state, 
    [taskId]: task
  }
}

function destroyTaskEntry(state, action) {
  const {payload} = action;
  const {taskId} = payload;

  let newState = {...state};
  delete newState[taskId];
  
  return newState;
}

function taskById(state = {}, action) {
  switch(action.type) {
    case ADD_TASK: return addTaskEntry(state, action);
    case DESTROY_TASK: return destroyTaskEntry(state, action);
    default: return state;
  }
}

function addTaskId(state, action) {
  const {payload} = action;
  const {taskId} = payload;

  return state.concat(taskId);
}

function destroyTaskId(state, action) {
  const {payload} = action;
  const {taskId} = payload;
  return state.filter((e) => {
    return e !== taskId;
  });
}

function allTasks(state = [], action) {
  switch(action.type) {
    case ADD_TASK: return addTaskId(state, action);
    case DESTROY_TASK: return destroyTaskId(state, action);
    default: return state;
  }
}

function setFetching(state = {fetching: false, error: false}, action) {
  switch(action.type) {
    case FETCH_TASKS: return {fetching: true, error: false};
    case FETCH_SUCCESS: return {fetching: false, error: false};
    case FETCH_ERROR: return {fetching: false, error: true};
    default: return state;
  }
}

function setSaving(state = {saving: false, error: false, eligible: false}, action) {
  switch(action.type) {
    case SAVE_TASKS: return {...state, saving: true, error: false };
    case SAVE_SUCCESS: return {saving: false, error: false, eligible: false};
    case SAVE_ERROR: return {...state, saving: false, error: true};
    case SAVE_ELIGIBLE: return {...state, eligible: true}
    default: return state;
  }
}

const taskReducer = combineReducers({
  byId: taskById,
  allIds: allTasks,
  fetchStatus: setFetching,
  saveStatus: setSaving
})

export default taskReducer;