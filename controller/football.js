var Football = require('../models/football');

exports.all = function (req, res) {
    Football.all(function (err, docs) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = function (req, res) {
    Football.findById(req.params.id, function (err, docs) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.create = function (req, res) {
    var player = {name: req.body.name};
    Football.create(player, function (err) {
        if (err) {
            return res.sendStatus(500);
        }
        return  res.sendStatus(200);
    })

}

exports.update = function (req, res) {

    Football.update(req.params.id, {name: req.body.name}, function (err) {
        if (err) {
            return res.sendStatus(500);
        }
        return  res.sendStatus(200);
    })

}

exports.delete = function (req, res) {

    Football.delete(req.params.id, function (err) {
        if (err) {
            return res.sendStatus(500);
        }
        return  res.sendStatus(200);
    })

}