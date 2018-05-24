
const express = require('express');
const router = express.Router();
const model = require('../models');
const bcrypt = require('bcrypt');

router.get('/',function(req,res){
    res.render('./customer/loginCustomer.ejs' ,{messages : ""})
})

router.post('/',function(req,res){
    let name = req.body.name
    let password = req.body.password
    model.Customer.findOne({
        where : {name : name}
    })
    .then(function(customer){
        if(customer){
            var salt = bcrypt.genSaltSync(8);
            var hash = bcrypt.hashSync(password,salt)
            let checkPassword = bcrypt.compareSync(password,hash)
            if(checkPassword){
                req.session.customer = model.Customer.name
                res.redirect('/')
            }else{

                res.render('./customer/loginCustomer.ejs',{messages : "Incorrect name or password "})
            }
        }else{

            res.render('./customer/loginCustomer.ejs',{messages : "Incorrect name or password"})
        }
    })
})

module.exports = router