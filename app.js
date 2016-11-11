'use strict';

var express = require ('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');



app.engine('html',nunjucks.render);
app.set('view engine','html');
nunjucks.configure('views',{noCache:true});

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'/public')));

var server = app.listen(1111, function(){
	console.log('listeing on port 1111');
})