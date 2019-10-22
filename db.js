var MongoClient = require('mongodb').MongoClient;

var state ={
    db:null
};

exports.connect = function (url,done) {
    if (state.db){
        return done();
    }

    MongoClient.connect(url, function (err,client) {
        if(err){
            return done(err);
        }
        state.db = client.db('socnet');
        done();
    })
}

exports.get = function () {
    return state.db;
}