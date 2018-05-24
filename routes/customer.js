const express = require('express');
const router = express.Router();
const model = require('../models');
const Provider = model.Provider;

router.get('/', function(req, res) {
    res.send('this is CUSTOMER page')
})

router.get('/addCustomer', function(req, res) {
    res.render('customers/addCustomer.ejs')
})

module.exports = router;