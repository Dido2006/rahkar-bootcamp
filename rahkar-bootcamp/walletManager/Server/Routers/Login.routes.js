const express = require('express');
// const { addtask } = require('../controllers/task.Controller');
const router = express.Router();

router.post('/login',login);
module.exports= login;