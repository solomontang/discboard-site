const axios = require('axios');
const models = require('../../db/models');

let fetchGuilds = async (token) => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    let fetch = await axios.get('https://discordapp.com/api/users/@me/guilds', config);
    return fetch.data
  } catch (e) {
    throw {status: e.response.status, statusMessage: e.response.statusText};
  }
}

module.exports.getGuilds = async (req, res) => {
  try {
    let token = await models.User.getAccessToken(req.session.passport.user);
    let guilds = await fetchGuilds(token)
    res.status(200).send(guilds);
  } catch (e) {
    res.status(e.status).send(e);
  }
}