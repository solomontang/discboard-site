const axios = require('axios');
const models = require('../../db/models');

const fetchGuilds = async (token) => {
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

const getGuilds = async (userId) => {
  try {
    let token = await models.User.getAccessToken(userId);
    let guilds = await fetchGuilds(token)
    return guilds;
  } catch (e) {
    throw e;
  }
}

const sendGuilds = async (req, res) => {
  try {
    let guilds = await getGuilds(req.session.passport.user)
    res.status(200).send(guilds);
  } catch (e) {
    res.status(e.status).send(e);
  }
}

module.exports.fetchGuilds = fetchGuilds;
module.exports.getGuilds = getGuilds;
module.exports.sendGuilds = sendGuilds;
