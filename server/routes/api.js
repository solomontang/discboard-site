'use strict';
const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

const users = require('./users');
const profiles = require('./profiles');
const upload = require('./upload');

router.use(middleware.auth.verify);
router.use('/users', users);
router.use('/profiles', profiles);
router.use('/upload', upload);

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;
