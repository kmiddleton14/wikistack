'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
var Promise = require('bluebird')
var Page = models.Page; 
var User = models.User; 


module.exports = router;


router.get('/', function(req, res, next) {
 
  var allPages = [];
  Page.findAll().then(function(arrPage){
  	  res.render('index', {
  		pages: arrPage
 	 });
  });

});

router.post('/', function(req, res, next) {

	//Page.hooks.beforeValidate();

   Page.create({
	    title: req.body.title,
	    content: req.body.content
  	}).then(function(page){
  		res.redirect(page.route);
  	}).catch(next);
});


router.get( '/add', function (req, res, next) {
  res.render('addpage');
});


router.get( '/:urlTitle', function (req, res, next) {

  Page.findOne({ 
    where: { 
      urlTitle: req.params.urlTitle 
    } 
  })
  .then(function(foundPage){
    res.render('wikipage', {
    	title: foundPage.title,
    	urlTitle: foundPage.urlTitle,
		content: foundPage.content

    });
  })
  .catch(next);
});




