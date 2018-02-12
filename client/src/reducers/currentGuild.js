import { SELECT_GUILD } from '../actions/actionTypes';

function currentGuild(state = {id: null}, action) {
  switch(action.type) {
    case SELECT_GUILD: return {id: action.id};
    default: return state;
  }
}

export default currentGuild;