import { SELECT_GUILD } from './actionTypes';

export const selectGuild = (e, data) => ({
  type: SELECT_GUILD,
  id: data.value
});