// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var index = require('./routes/index');
var mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/ang', { useMongoClient: true })


app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 	next();
});
app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', index);


var Schema = mongoose.Schema;
var bookSchema = new Schema({
		title: String,
		description: String,
		author: String,
		publisher: String,
		category: String,
		price: Number,
		cover: String,	
});
var book = mongoose.model('book', bookSchema);


app.post('/book', function(req, res) {	
	var payload = new book({
		"title": req.body.bookData.title,
		"description": req.body.bookData.description,
		"author": req.body.bookData.author,
		"publisher": req.body.bookData.publisher,
		"category": req.body.bookData.category,
		"price": req.body.bookData.price,
		"cover": req.body.bookData.cover,
	});	
	payload.save(function(err) {
		if(err) {
			res.send({
				success: false,
				message: "Book not added"
			});
		} else {
			res.send({
				success: true,
				message: "Book successfully added",
				book: payload
			});
		}
	}); 
});


app.get('/books', function(req, res) {
	book.find({}, function(err, books) {
		if(err) throw err;
		res.send(books);
	}); 
});


app.delete('/book', function(req, res) {
	var bookId = req.query.bookId;

	book.findByIdAndRemove(bookId, function(err, book) {
		if(err) {
			console.log(err);
			res.send({
				success: false,
				message: "The request was not completed. Book with id " + book._id + " is not successfully deleted"
			});
		} else {
			res.send({
				success: true,
				message: "Book successfully deleted",
				id: book._id
			});
		}
	});
});


app.get('/bookupdate', function(req, res) {
	var id = req.query.bookId;

	book.find({ _id: id }, function(err, book) {
		if(err) throw err;
		res.send(book[0]);
	});
});



app.put('/book', function(req, res) {
	var bookData = req.body.bookData;
	
	 book.update({_id:bookData._id}, {$set:{
		title: bookData.title,
		description: bookData.description,
		author: bookData.author,
		publisher: bookData.publisher,
		category: bookData.category,
		price: bookData.price,
		cover:bookData.cover,
	}}, {new: true}, function(err, doc){
		if(err) {	
			res.send(err);
		} 
		else {		
				res.send({
				success: true,
				message: "Book successfully updated"
			});
		}
	});	
	
});


app.listen(3000, function() {
  console.log('listening on 3000');
})