const express = require('express')
var router = express.Router()
let model = require('../models')

router.get('/',function(req,res){
  res.render('home.ejs')
})

router.get('/schedule',function(req,res){
  model.Schedule.findAll()
  .then(function(schedule){
    // res.send(schedule)
    res.render('schedule.ejs',{schedule : schedule})
  })
})

router.get('/',function(req,res){
  model.Schedule.findById(req.params.id)
  .then(function(dataSchedule){
    res.redirect('/',{dataSchedule : dataSchedule})
  })
})

router.post('/',function(req,res){
  model.Customer.Schedules.push(model.Schedule)
  .then(function(){
    res.redirect('/')
  })
})
module.exports = router
