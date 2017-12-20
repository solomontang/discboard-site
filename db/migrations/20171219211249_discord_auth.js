
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id').unsigned().primary();
      table.string('discord_id', 32).nullable();
      table.string('username', 32).nullable();
      table.string('discriminator', 4).nullable();
      table.string('avatar', 32).nullable();
    }),
    knex.schema.createTableIfNotExists('guilds', function(table){
      table.increments('id').unsigned().primary();
      table.string('guild_id', 32).nullable();
      table.string('name', 32).nullable();
      table.string('icon', 32).nullable();
      table.boolean('owner').nullable();
      table.bigInteger('permissions').nullable();
      table.integer('user_id').references('users.id').onDelete('CASCADE');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('guilds'),
    knex.schema.dropTableIfExists('users')
  ]);
};
