'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
var Promise = require('bluebird')
var Page = models.Page; 
var User = models.User; 


module.exports = router;


router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = promisifiedPageBuild({
    title: req.body.title,
    content: req.body.content
  }).then(page.save)
  .then(function(){
  	res.redirect('/');
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  //page.save();
  // -> after save -> res.redirect('/');
});


router.get( '/add', function (req, res) {
  res.render('addpage');
});


function promisifiedPageBuild(pageObj){
	return new Promise(function(resolve, reject){
		Page.build(pageObj, function(err, obj){
			if(err) reject(err);
			else resolve(obj);
		})
	})
};


