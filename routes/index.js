const express = require('express');
const route = express.Router();
const Model = require('../models/index.js');

route.get('/',function(req,res){
  res.render('home.ejs')
})

module.exports = route;