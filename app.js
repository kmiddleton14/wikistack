'use strict';

var express = require ('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
const routes = require('./routes/wiki');
var bodyParser = require('body-parser');
var path = require('path');

var models = require('./models');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.engine('html',nunjucks.render);
app.set('view engine','html');
nunjucks.configure('views',{noCache:true});

app.use(morgan('dev'));


app.use(express.static(path.join(__dirname,'./public')));

app.use('/wiki', routes);

// var server = app.listen(1111, function(){
// 	console.log('listeing on port 1111');
// })

models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    app.listen(3001, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);
