const express = require('express')
var router = express.Router()
let model = require('../models')


router.get('/',function(req,res){
    model.Customer.findAll({
        order :[['id','ASC']]
    })
    .then(function(dataCustomer){
        // res.send(dataCustomer)
        res.render('./customer/customer.ejs',{dataCustomer : dataCustomer})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/addCustomer',function(req,res){
    res.render('./customer/addCustomer.ejs')
})

router.post('/addCustomer',function(req,res){
    let data = {
        name : req.body.name,
        phone : req.body.phone,
        password : req.body.password
    }
    model.Customer.create(data)
    .then(()=>{
        res.redirect('/customer')
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/delete/:id',function(req,res){
    model.Customer.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(()=>{
        res.redirect('/customer')
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/edit/:id',function(req,res){
    model.Customer.findById(req.params.id)
    .then(function(dataCustomer){
        res.render('./customer/editCustomer.ejs',{dataCustomer : dataCustomer})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/edit/:id',function(req,res){
    model.Customer.update({
        name : req.body.name,
        phone : req.body.phone,
        password : req.body.password
    },{
        where : {
            id : req.params.id
        }
    })
    .then(()=>{
        res.redirect('/customer')
    })
    .catch(err=>{
        console.log(err)
    })
})




module.exports = router