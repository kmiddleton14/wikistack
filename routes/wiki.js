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

	//Page.hooks.beforeValidate();

   Page.create({
	    title: req.body.title,
	    content: req.body.content
  	}).then(function(){
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




