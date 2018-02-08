'use strict';
const express = require('express');
const router = express.Router();
const UploadController = require('../controllers').Upload;

router.route('/')
  .get(UploadController.getSigned);

module.exports = router;