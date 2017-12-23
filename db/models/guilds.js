const db = require('../');

const Guild = db.Model.extend({
  tableName: 'guilds',
  user: function() {
    return this.belongsTo('User');
  }
});

module.exports = db.model('Guild', Guild);