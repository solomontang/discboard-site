'use strict';
const express = require('express');
const router = express.Router();
const UserController = require('../controllers').Users;

router.route('/@me')
  .get((req, res) => {
    res.status(200).send('users/@me');
  });

  router.route('/@me/guilds')
  .get(UserController.getGuilds);

module.exports = router;
