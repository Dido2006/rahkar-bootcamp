const express = require('express');
const { getTestData } = require('../cotrollers/test.controller');

const router = express.Router()

router.post('/',getTestData );

module.exports = router
