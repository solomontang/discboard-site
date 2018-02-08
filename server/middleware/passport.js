'use strict';
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const config = require('config')['passport'];
const models = require('../../db/models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  return models.User.where({ id }).fetch({columns:['id','discord_id','username','discriminator','avatar']})
    .then(user => {
      if (!user) {
        throw user;
      }
      done(null, user.serialize());
    })
    .error(error => {
      done(error, null);
    })
    .catch(() => {
      done(null, null, { message: 'No user found' });
    });
});

passport.use('discord', new DiscordStrategy({
  clientID: config.Discord.clientID,
  clientSecret: config.Discord.clientSecret,
  callbackURL: config.Discord.callbackURL
},
  (accessToken, refreshToken, profile, done) => {
    return getOrCreateOAuthUser(profile, done)
  })
);

const getOrCreateOAuthUser = (oauthUser, done) => {
  return models.User.where({discord_id: oauthUser.id})
  .fetch()
    .then(user => {
      let userInfo = {
        discord_id: oauthUser.id,
        username: oauthUser.username,
        discriminator: oauthUser.discriminator,
        avatar: oauthUser.avatar,
        access_token: oauthUser.accessToken
      }
      if (user) {
        return user.save(userInfo, {method: 'update'});
      }
      return models.User.forge(userInfo).save();
    })
    .then(user => {
      if (user) {
        done(null, user.serialize());
      }
    })
    .error(err => {
      done(err, null);
    })
}

module.exports = passport;
