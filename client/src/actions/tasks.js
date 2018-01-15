import axios from 'axios';
import cuid from 'cuid';
import { ADD_TASK, DESTROY_TASK, FETCH_TASKS, FETCH_SUCCESS, FETCH_ERROR } from './actionTypes';


export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      title: task.title,
      taskId: task.taskId || cuid()
    }
  }
};

export const destroyTask = (taskId) => {
  return {
    type: DESTROY_TASK,
    payload: {
      taskId
    }
  }
}

export const isFetching = () => {
  return {
    type: FETCH_TASKS
  }
}

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS
  }
}

export const fetchError = () => {
  return {
    type: FETCH_ERROR
  }
}

export const fetchTasks = () => {
  return (dispatch, getState) => {
    return axios.get(`http://cfassignment.herokuapp.com/${getState().user}/tasks`)
      .then((res) => {
        if (!res.data.tasks) {
          throw({msg: 'No tasks found'});
        } else {
          dispatch(isFetching());
          res.data.tasks.forEach(task => {
            dispatch(addTask(task));
          })
          dispatch(fetchSuccess());
        }
      })
      .catch((err) => {
        dispatch(fetchError());
        console.error(err);
      });
  }
}