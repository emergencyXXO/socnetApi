var express = require('express');
var bodyParser = require('body-parser');

var db = require('./db');
var footballController = require('./controller/football');


var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.connect('mongodb://localhost:27017', function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(3012, function () {
        console.log('Server lunched!');
    });
});

app.get('/', function (req, res) {
    res.send('Hello from Api');
});


app.get('/football',
    footballController.all
    //     function (req, res) {
    //     db.get().collection('football').find().toArray(function (err,docs) {
    //         if(err){
    //             console.log(err);
    //             return  res.sendStatus(500);
    //         }
    //         res.send(docs);
    //     })
    //
    // }
);


app.post('/football', footballController.create
//     function (req, res) {
//
//     var player = { name:req.body.name};
//     db.get().collection('football').insertOne(player,function (err) {
//         if (err){
//             console.log(err);
//             return  res.sendStatus(500);
//         }
//
//         res.send(player);
//
//     });
// }
);

app.get('/football/:id', footballController.findById

//     function (req, res) {
//
//     db.get().collection('football').findOne({ _id: ObjectID(req.params.id)},function (err,docs) {
//         if(err){
//             console.log(err);
//             return  res.sendStatus(500);
//         }
//         res.send(docs);
//     })
//
// }
);

app.put('/football/:id', footballController.update
//     function (req, res) {
//
//     db.get().collection('football').updateOne({ _id: ObjectID(req.params.id)},{$set:{name:req.body.name}},function (err,docs) {
//         if(err){
//             console.log(err);
//             return  res.sendStatus(500);
//         }
//         return  res.sendStatus(200);
//     })
//
// }
);
app.delete('/football/:id', footballController.delete
//     function (req, res) {
//     db.get().collection('football').deleteOne({ _id: ObjectID(req.params.id)},function (err,docs) {
//         if(err){
//             console.log(err);
//             return  res.sendStatus(500);
//         }
//         return  res.sendStatus(200);
//     })
// }
);



