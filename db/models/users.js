const db = require('../');
// const Promise = require('bluebird');

const User = db.Model.extend({
  tableName: 'users',
  guilds: function() {
    return this.hasMany('Guild');
  }
}, {
  getAccessToken: async function(id) {
    let user;
    try {
      user = await new this().fetch({columns: 'access_token', require: true})
      if (user.attributes.access_token) return user.attributes.access_token;
      throw 'Error' //Forward throw if error in fetch
    } catch (e) {
      throw {
        status: 404,
        statusMessage: 'Access token not found'
      };
    }
  }
});

module.exports = db.model('User', User);
