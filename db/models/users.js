const db = require('../');

const User = db.Model.extend({
  tableName: 'users',
  guilds: function() {
    return this.hasMany('Guild');
  }
});

module.exports = db.model('User', User);
