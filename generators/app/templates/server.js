var express = require('express'),
    app = express(),
    router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morest = require('morest').Morest;

//Connect to your mongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/bears');

//Use bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 8000;

//Load all the controllers
var BearController = require('./app/controllers/Bear');

//Let Morest generate the routes for the /api endpoint
app.use('/api', morest(router, mongoose, {
    controllers: [
        BearController
    ]
}));

app.listen(port);