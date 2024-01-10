const express = require('express');
const { DiceLogin } = require('../Controller/bookController');
const { DiceLoginQ } = require('../Controller/bookControllerQ');

const router= express.Router();
router.post('/:',DiceLogin)
router.post('/:',DiceLoginQ)

module.exports = router;

