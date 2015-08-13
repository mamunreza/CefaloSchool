var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('cefalotest', ['courselist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json()); // parse application/json 

app.get('/courselist', function (req, res) {
	console.log('i received the req');

	db.courselist.find(function (err, docs) {
		if (err) {
	        throw err;
	    } else {
		    console.log(docs);
		    res.json(docs);
		}
	});


	// db.contactlist.find(function (err, docs) {
	// 	console.log(docs);
	// 	res.json(docs);
	// });

	// c1 = {
	// 	name: 'Java',
	// 	description: 'Java Basics',
	// 	date: '01-08-2015'
	// };

	// c2 = {
	// 	name: 'Javascript',
	// 	description: 'Javascript Ninja',
	// 	date: '04-08-2015'
	// };

	// c3 = {
	// 	name: 'Nodejs',
	// 	description: 'Lear Nodejs',
	// 	date: '10-08-2015'
	// };

	// var courselist = [c1, c2, c3];
	// res.json(courselist);

});


app.post('/courselist', function (req, res) {
	console.log(req.body);
	db.courselist.insert(req.body, function (err, doc) {
		res.json(doc);
	});
});


app.delete('/courselist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.courselist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/courselist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.courselist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.put('/courselist/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.courselist.findAndModify({ query: {_id: mongojs.ObjectId(id)},
	update: {$set: {name: req.body.name, description: req.body.description, date: req.body.date}},
	new: true}, function (err, doc) {
		res.json(doc);
	});
});

app.listen(3000);
console.log("server is running on port 3000");