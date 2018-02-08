import { SET_GUILDS } from '../actions/actionTypes';

const guilds = (state = {}, action) => {
  switch (action.type) {
  case SET_GUILDS:
    return action.guilds;
  default:
    return state;
  }
};

export default guilds;