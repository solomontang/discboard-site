'use strict';
const express = require('express');
const router = express.Router();
const UploadController = require('../controllers').Upload

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

router.route('/upload')
  .get(UploadController.getSigned);
module.exports = router;
