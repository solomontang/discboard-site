'use strict';
const express = require('express');
const middleware = require('../middleware');
const router = express.Router();
// const GuildController = require('../controllers').Guilds;

router.route('/@me')
  .get(middleware.auth.verify, (req, res) => {
    res.status(200).send('guilds/@me');
  });

module.exports = router;
