var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection('football').find().toArray(function (err, docs) {
        cb(err, docs);
    })
};

exports.findById = function (id, cb) {
    db.get().collection('football').findOne({_id: ObjectID(id)}, function (err, docs) {
        cb(err, docs);
    })
};

exports.create = function (player, cb) {
    db.get().collection('football').insertOne(player, function (err) {
        cb(err);

    });
};
exports.update = function (id, newData, cb) {
    db.get().collection('football').updateOne({_id: ObjectID(id)}, {$set: newData}, function (err, docs) {
        cb(err, docs);
    })
};

exports.delete = function (id, cb) {
    db.get().collection('football').deleteOne({_id: ObjectID(id)}, function (err, docs) {
        cb(err, docs);
    })
};