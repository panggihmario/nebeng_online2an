const express = require('express')
var router = express.Router()
let model = require('../models')

router.get('/',function(req,res){
  res.render('home.ejs')
})

router.get('/schedule',function(req,res){
  console.log("=============",req.params.id)
  model.Schedule.findAll()
  .then(function(schedule){
    // res.send(schedule)
    res.render('schedule.ejs',{schedule : schedule})
   
  })
})

// router.get('/',function(req,res){
//   model.Customer.findById(req.params.id)
//   .then(function(dataSchedule){
//     res.redirect('/',{dataCustomer : dataCustomer})
//   })
// })
router.get('/schedule/:id',function(req,res){
  model.Schedule.findById(req.params.id)
  .then((data)=>{
    res.render('homepage.ejs',{data : data})
  })
})


router.post('/schedule/:id',function(req,res){
  let idCustomer = req.session.current_user.id

  let idSchedule = req.params.id
  model.Order.create({
    consumer_id : idCustomer,
    schedule_id : idSchedule
  })
  .then(function(){
    res.redirect('/schedule')
  })
  .catch(err=>{
    console.log(err)
  })
})
module.exports = router
