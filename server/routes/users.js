'use strict';
const express = require('express');
const middleware = require('../middleware');
const router = express.Router();
const UserController = require('../controllers').Users;

router.route('/@me')
  .get(middleware.auth.verify, (req, res) => {
    res.status(200).send('users/@me');
  });

  router.route('/@me/guilds')
  .get(middleware.auth.verify, UserController.getGuilds);

module.exports = router;
