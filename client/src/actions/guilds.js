import { SELECT_GUILD } from './actionTypes';

export const selectGuild = (id) => ({
  type: SELECT_GUILD,
  id
});