const express = require('express');
const { GetBooks } = require('../Controller/bookController');
const { GetBooksQ } = require('../Controller/bookControllerQ');

const router= express.Router();
router.get('/:id',GetBooks)
router.get('/:id/',GetBooksQ)

module.exports = router;

