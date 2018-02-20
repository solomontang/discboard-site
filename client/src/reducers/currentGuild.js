import { SELECT_GUILD, LOCATION_CHANGE } from '../actions/actionTypes';

function currentGuild(state = {id: null}, action) {
  switch(action.type) {
    case SELECT_GUILD: return {id: action.id};
    case LOCATION_CHANGE: return getGuildFromLocation(action);
    default: return state;
  }
}

function getGuildFromLocation(action) {
  const pathname = action.payload.pathname;
  const [_, guild, id = ''] = pathname.split('/');
  return {id};
}

export default currentGuild;