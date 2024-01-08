const express = require('express');
const { addtask } = require('../controllers/task.controller');
const router = express.Router();

router.post('/add',addtask);
module.exports= router;
