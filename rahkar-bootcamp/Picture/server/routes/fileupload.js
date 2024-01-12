var express = require('express');

var multer = require('multer');

var router = express.Router();

router.get("/", function(request, response, next){

	response.render('fileupload', {title:'File Upload in Node JS Express using Multer'});

});

module.exports = router;