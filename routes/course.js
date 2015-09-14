// MongoDB configuration
var mongojs = require('mongojs');
var db = mongojs('cefalotest', ['courselist']);

/* GET course listing. */
exports.list = function(req, res){
    db.courselist.find(function (err, docs) {
        if (err) {
            throw err;
        } else {
            res.json(docs);
        }
    });
};

exports.add = function(req, res){
    db.courselist.insert(req.body, function (err, doc) {
        res.json(doc);
    });
};

exports.edit = function(req, res){
    var id = req.params.id;
    db.courselist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
};

exports.update = function(req, res){
    var id = req.params.id;
    db.courselist.findAndModify({ query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, description: req.body.description, date: req.body.date}},
    new: true}, function (err, doc) {
        res.json(doc);
    });
};

exports.delete = function(req, res){
    var id = req.params.id;
    console.log(id);
    db.courselist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
};