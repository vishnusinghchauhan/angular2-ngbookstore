var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angular3', { useMongoClient: true })
//mongoose.connection.openUri('mongodb://localhost/angular3')



router.post('/book"',function(req,res){
	console.log(req.body);
});


module.exports = router;