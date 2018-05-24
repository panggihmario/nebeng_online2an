
const express = require('express');
const router = express.Router();
const model = require('../models');
const bcrypt = require('bcrypt');

router.get('/',function(req,res,next){
    // res.render('./customer/loginCustomer.ejs' ,{messages : ""})
    if(req.session.current_user){
        res.send('login')
    }else{
        next()
    }
},function(req,res,next){
    res.render('./customer/loginCustomer.ejs' ,{messages : ""})
})



router.post('/',function(req,res,next){
    var salt = bcrypt.genSaltSync(8);
	var hash = bcrypt.hashSync(req.body.password,salt)
    let password = bcrypt.compareSync(req.body.password,hash)
    model.Customer.findOne({
        where : {
            name : req.body.name
        }
    })
    .then(customer=>{
        if(customer){
            if(password){
            req.session.current_user = customer
            console.log("===========",req.session.current_user.dataValues)
            next()
            res.redirect('/schedule')
        }else{
            res.render('./customer/loginCustomer.ejs',{messages : "Incorrect name or password"})
        }
    }
        
    })
})



module.exports = router