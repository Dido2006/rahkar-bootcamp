const express = require('express');
const { listBlog,addBlog,deleteBlog, getBlog, updateBlog } = require('../controllers/blog.controller');
const router = express.Router();

router.get('/list',listBlog);
router.post('/add',addBlog);
router.put('/update',updateBlog);
router.post('/delete',deleteBlog);
router.get('/get',getBlog);


module.exports= router;
