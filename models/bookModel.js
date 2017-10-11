'use strict';
var mongoose = require('mongoose');

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